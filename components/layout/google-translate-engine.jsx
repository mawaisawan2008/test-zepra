"use client";

import { useEffect } from "react";

function getTargetLanguage() {
  const translateCookie = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("googtrans="));

  if (!translateCookie) return "";

  const [, , target] = decodeURIComponent(translateCookie.slice("googtrans=".length)).split("/");
  return target && target !== "en" ? target : "";
}

export function GoogleTranslateEngine() {
  useEffect(() => {
    const targetLanguage = getTargetLanguage();
    if (!targetLanguage) return;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    if (!document.getElementById("google-translate-engine-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-engine-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="google-translate-engine"
      aria-hidden="true"
    />
  );
}