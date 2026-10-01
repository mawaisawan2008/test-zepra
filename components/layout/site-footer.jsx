import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { siteMeta, socialLinks } from "@/lib/site";

function XIcon({ className }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  X: XIcon,
  WhatsApp: MessageCircle,
};

const navigationGroups = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/website-development" },
      { label: "AI Automation", href: "/services#ai-agents-bots" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Cloud", href: "/services" },
      { label: "UI/UX", href: "/services#graphic-design" },
      { label: "Ecommerce", href: "/services#ecommerce-solutions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Custom Software", href: "/website-development" },
      { label: "Workflow Automation", href: "/services#ai-agents-bots" },
      { label: "AI Ops", href: "/services#ai-agents-bots" },
      { label: "Enterprise Systems", href: "/services" },
    ],
  },
  {
    title: "Products / Tech Stack",
    links: [
      { label: "Web Platforms", href: "/website-development" },
      { label: "Mobile Platforms", href: "/services" },
      { label: "APIs", href: "/services" },
      { label: "Cloud Infrastructure", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/portfolio" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Guides", href: "/services" },
      { label: "News", href: "/portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
      { label: "Partner Program", href: "/contact" },
    ],
  },
];

const partnerNames = ["Microsoft", "AWS", "Shopify", "Salesforce"];

const locations = [
  {
    flag: "🇺🇸",
    name: "USA",
    detail: "San Jose, CA / Delaware",
    note: "US Recognized Tech Agency",
  },
  {
    flag: "🇵🇰",
    name: "Pakistan (HQ)",
    detail:
      "D Tower, Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab",
  },
  {
    flag: "🇦🇪",
    name: "UAE / Global Services",
    detail:
      "Serving clients worldwide across the US, UK, Middle East, and Asia-Pacific.",
  },
  {
    flag: "🌐",
    name: "Global Reach",
    detail: "Distributed delivery for clients across multiple time zones.",
  },
];

const footerSocialLinks = [
  ...socialLinks.map((social) => ({
    ...social,
    label: social.label === "X" ? "X / Twitter" : social.label,
  })),
  { label: "WhatsApp", href: siteMeta.whatsappLink },
];

const contactIconWrap =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-brand-cyan ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white";

export function SiteFooter() {
  return (
    <footer className="section-shell-tight relative border-t border-white/60 bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />

      <div className="w-full px-6 lg:px-12">
        <div className="flex flex-col gap-6 border-b border-slate-800 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-sm">
            <Logo
              className="[&_svg]:shadow-glow"
              textClassName="[&_div:first-child]:text-white [&_div:last-child]:text-slate-400"
            />
            <p className="mt-4 text-sm leading-7 text-slate-300">{siteMeta.tagline}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${siteMeta.email}`}
              className="group inline-flex items-center gap-3 transition-colors duration-200 hover:text-cyan-400"
            >
              <span className={contactIconWrap}>
                <Mail className="h-4 w-4" />
              </span>
              {siteMeta.email}
            </a>
            <a
              href={siteMeta.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 transition-colors duration-200 hover:text-cyan-400"
            >
              <span className={contactIconWrap}>
                <MessageCircle className="h-4 w-4" />
              </span>
              {siteMeta.whatsappNumber}
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="py-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 xl:grid-cols-5">
            {navigationGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-base font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="transition-colors duration-200 hover:text-cyan-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="border-t border-b border-slate-800 py-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Technology ecosystem
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              {partnerNames.map((partner) => (
                <span
                  key={partner}
                  className="text-sm font-semibold text-slate-300 opacity-70 grayscale transition-opacity duration-200 hover:opacity-100"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section aria-labelledby="global-presence-heading" className="py-8">
          <h3
            id="global-presence-heading"
            className="font-display text-lg font-semibold text-white"
          >
            Global locations &amp; presence
          </h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {locations.map((location) => (
              <div key={location.name} className="min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl" aria-hidden="true">
                    {location.flag}
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    {location.name}
                  </h4>
                </div>
                <p className="mt-3 break-words text-sm leading-6 text-slate-400">
                  {location.detail}
                </p>
                {location.note ? (
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {location.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2026 Zepra Tech</span>
            <span aria-hidden="true">|</span>
            <span>All Rights Reserved.</span>
            <span aria-hidden="true">|</span>
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/terms-of-use"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              Terms of Service
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              Security
            </Link>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3" aria-label="Social media">
            {footerSocialLinks.map((social) => {
              const Icon = social.label.startsWith("X")
                ? XIcon
                : socialIcons[social.label];
              if (!Icon) return null;
              const isExternal = social.href.startsWith("http");

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{social.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
