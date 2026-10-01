import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { footerServices, legalLinks, navItems, siteMeta, socialLinks } from "@/lib/site";
import { slugify } from "@/lib/utils";

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
};

const exploreLinks = [
  { label: "Website Development", href: "/website-development" },
  { label: "Social Media Marketing", href: "/social-media-marketing" },
  { label: "Thumbnail Designing", href: "/thumbnail-designing" },
  { label: "Business inquiry", href: "/contact" },
];

const columnLink =
  "inline-block transition-transform duration-200 hover:translate-x-1 hover:text-white";

const contactIconWrap =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-brand-cyan ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white";

export function SiteFooter() {
  return (
    <footer className="section-shell-tight relative border-t border-white/60 bg-gradient-to-b from-[#070c18] via-[#0b132b] to-[#0e1f38] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />

      <div className="w-full px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo
              className="[&_svg]:shadow-glow"
              textClassName="[&_div:first-child]:text-white [&_div:last-child]:text-slate-400"
            />
            <p className="mt-6 text-sm leading-7 text-slate-300">{siteMeta.tagline}</p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${siteMeta.email}`}
                  className="group inline-flex items-center gap-3 hover:text-white"
                >
                  <span className={contactIconWrap}>
                    <Mail className="h-4 w-4" />
                  </span>
                  {siteMeta.email}
                </a>
              </li>
              <li>
                <a
                  href={siteMeta.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 hover:text-white"
                >
                  <span className={contactIconWrap}>
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  {siteMeta.whatsappNumber}
                </a>
              </li>
            </ul>

            <ul className="mt-6 flex items-center gap-2.5" aria-label="Social media">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                if (!Icon) return null;
                const isExternal = social.href.startsWith("http");

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan/50 hover:bg-primary hover:text-white"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {navItems.filter((item) => item.href).map((item) => (
                <li key={item.href ?? item.label}>
                  <Link href={item.href} className={columnLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {footerServices.map((service) => (
                <li key={service.title}>
                  <Link href={`/services#${slugify(service.title)}`} className={columnLink}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={columnLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Zepra Tech. All rights reserved.</div>
            <div>
              <a
                href="https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Crafted By UI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
