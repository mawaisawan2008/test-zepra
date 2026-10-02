"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe2 } from "lucide-react";

const languages = [
  { code: "EN", value: "en", label: "English" },
  { code: "FR", value: "fr", label: "Français" },
  { code: "ES", value: "es", label: "Español" },
];

let translateWidgetPromise;

function loadTranslateWidget() {
  if (window.google?.translate?.TranslateElement) {
    return Promise.resolve();
  }

  if (translateWidgetPromise) return translateWidgetPromise;

  translateWidgetPromise = new Promise((resolve, reject) => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es",
          autoDisplay: false,
        },
        "google_translate_element",
      );
      resolve();
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      translateWidgetPromise = undefined;
      reject(new Error("Translation service could not be loaded."));
    };
    document.head.appendChild(script);
  });

  return translateWidgetPromise;
}

function getTranslateSelect() {
  const existing = document.querySelector(".goog-te-combo");
  if (existing) return Promise.resolve(existing);

  return new Promise((resolve, reject) => {
    const timeoutId = window.setTimeout(() => {
      observer.disconnect();
      reject(new Error("Translation options are not available."));
    }, 8000);

    const observer = new MutationObserver(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        window.clearTimeout(timeoutId);
        observer.disconnect();
        resolve(select);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
}

async function applyLanguage(language) {
  await loadTranslateWidget();
  const select = await getTranslateSelect();
  select.value = language;
  select.dispatchEvent(new Event("change", { bubbles: true }));
}

export function LanguageSwitcher() {
  const rootRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedCode = window.localStorage.getItem("zepra-language");
    const savedLanguage = languages.find((language) => language.code === savedCode);

    if (!savedLanguage) return;
    setActiveLanguage(savedLanguage);

    if (savedLanguage.value !== "en") {
      applyLanguage(savedLanguage.value).catch(() => {
        setError("Translation is temporarily unavailable.");
      });
    }
  }, []);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  async function handleLanguageChange(language) {
    setIsOpen(false);
    setError("");

    try {
      await applyLanguage(language.value);
      setActiveLanguage(language);
      window.localStorage.setItem("zepra-language", language.code);
    } catch {
      setError("Translation is temporarily unavailable.");
    }
  }

  return (
    <div ref={rootRef} className="relative z-50 notranslate">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:bg-white"
        aria-label={`Language: ${activeLanguage.label}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{activeLanguage.code}</span>
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </button>

      {isOpen ? (
        <div
          role="menu"
          aria-label="Select language"
          className="absolute right-0 z-50 mt-2 flex w-32 flex-col gap-1 rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-xl backdrop-blur-md"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              role="menuitemradio"
              aria-checked={activeLanguage.code === language.code}
              className="flex items-center justify-between rounded-xl px-3 py-1.5 text-left text-xs font-medium text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              onClick={() => handleLanguageChange(language)}
            >
              <span>{language.label}</span>
              <span className="text-[10px] text-slate-500">{language.code}</span>
            </button>
          ))}
        </div>
      ) : null}

      <div
        id="google_translate_element"
        className="pointer-events-none fixed -left-[10000px] top-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      />
      <span className="sr-only" role="status" aria-live="polite">
        {error}
      </span>
    </div>
  );
}