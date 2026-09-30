"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Globe,
  Image as ImageIcon,
  Megaphone,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

const projectIcons = {
  "/website-development": Globe,
  "/social-media-marketing": Megaphone,
  "/thumbnail-designing": ImageIcon,
};

function isPathActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isItemActive(item, pathname) {
  const childActive = item.children?.some((child) => isPathActive(pathname, child.href)) ?? false;

  if (!item.href) return childActive;
  if (item.href === "/") return pathname === "/";
  return isPathActive(pathname, item.href) || childActive;
}

function ProjectIconBadge({ href }) {
  const Icon = projectIcons[href];
  if (!Icon) return null;

  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover/item:bg-primary group-hover/item:text-white">
      <Icon className="h-4 w-4" />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const navRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false, snap: true });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Shrinks the header a little after scrolling and tracks how far down the page you are.
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Moves the soft highlight under whichever nav item is hovered or focused.
  const movePillTo = (element) => {
    const nav = navRef.current;
    if (!nav || !element) return;

    const navBox = nav.getBoundingClientRect();
    const box = element.getBoundingClientRect();

    setPill((current) => ({
      left: box.left - navBox.left,
      width: box.width,
      visible: true,
      snap: !current.visible,
    }));
  };

  const hidePill = () => setPill((current) => ({ ...current, visible: false }));

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[linear-gradient(135deg,rgba(249,252,255,0.97),rgba(236,245,255,0.92),rgba(244,249,255,0.96))] px-3 pt-4 backdrop-blur-xl">
      <div className="container">
        <div
          className={cn(
            "surface-panel relative flex items-center justify-between gap-4 px-5 transition-all duration-300 lg:px-7",
            scrolled ? "py-2.5 shadow-premium" : "py-4",
          )}
        >
          <Link href="/" aria-label="Zepra Tech home">
            <Logo compact />
          </Link>

          <nav
            ref={navRef}
            className="relative hidden items-center gap-2 lg:flex"
            onMouseLeave={hidePill}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) hidePill();
            }}
          >
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute top-1/2 h-9 -translate-y-1/2 rounded-full bg-slate-100 motion-reduce:transition-none",
                pill.snap
                  ? "transition-opacity duration-200"
                  : "transition-[left,width,opacity] duration-300 ease-out",
                pill.visible ? "opacity-100" : "opacity-0",
              )}
              style={{ left: pill.left, width: pill.width }}
            />

            {navItems.map((item) => {
              const isActive = isItemActive(item, pathname);

              if (item.children?.length) {
                return (
                  <div
                    key={item.label}
                    className="group relative"
                    onMouseEnter={(event) => movePillTo(event.currentTarget)}
                    onFocus={(event) => movePillTo(event.currentTarget)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "relative z-10 flex items-center rounded-full px-4 py-2 pr-9 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950",
                        isActive && "bg-slate-950 text-white shadow-soft hover:bg-slate-900 hover:text-white",
                      )}
                      aria-haspopup="menu"
                      aria-expanded={isActive ? "true" : "false"}
                    >
                      {item.label}
                    </button>
                    <ChevronDown
                      className={cn(
                        "pointer-events-none absolute right-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180",
                        isActive ? "text-white" : "text-slate-500",
                      )}
                    />
                    <div className="invisible absolute left-0 top-full z-30 w-[340px] translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="rounded-[28px] border border-slate-200/80 bg-white/96 p-3 shadow-premium backdrop-blur-xl">
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item flex items-start gap-3 rounded-[22px] px-4 py-3 transition-colors duration-200 hover:bg-slate-100"
                            >
                              <ProjectIconBadge href={child.href} />
                              <span className="block">
                                <span className="block text-sm font-semibold text-slate-950">
                                  {child.label}
                                </span>
                                <span className="mt-1 block text-xs leading-5 text-brand-slate">
                                  {child.description}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={(event) => movePillTo(event.currentTarget)}
                  onFocus={(event) => movePillTo(event.currentTarget)}
                  className={cn(
                    "relative z-10 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950",
                    isActive && "bg-slate-950 text-white shadow-soft hover:bg-slate-900 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
            <Button asChild className="group">
              <Link href="/contact">
                Book a Consultation
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-soft transition-colors hover:border-primary/20 hover:text-primary lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-x-7 bottom-0 h-[2px] overflow-hidden rounded-full transition-opacity duration-300",
              scrolled ? "opacity-100" : "opacity-0",
            )}
          >
            <div
              className="h-full origin-left bg-gradient-to-r from-brand-blue to-brand-cyan"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>

        {isOpen ? (
          <div className="surface-panel mt-3 px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = isItemActive(item, pathname);

                if (item.children?.length) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className={cn(
                          "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950",
                          isActive && "bg-slate-950 text-white shadow-soft hover:bg-slate-900 hover:text-white",
                        )}
                        aria-haspopup="menu"
                        aria-expanded={isActive ? "true" : "false"}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="mt-2 grid gap-2 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group/item flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 transition-colors duration-200 hover:border-primary/20 hover:bg-slate-50"
                          >
                            <ProjectIconBadge href={child.href} />
                            <span className="block">
                              <span className="block text-sm font-semibold text-slate-950">
                                {child.label}
                              </span>
                              <span className="mt-1 block text-xs leading-5 text-brand-slate">
                                {child.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950",
                      isActive && "bg-slate-950 text-white shadow-soft hover:bg-slate-900 hover:text-white",
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/services">View Services</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
