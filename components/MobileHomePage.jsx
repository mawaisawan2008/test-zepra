import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { Logo } from "@/components/shared/logo";
import { HomeHero } from "@/components/sections/home-hero";
import { TestimonialCard } from "@/components/sections/testimonials-section";
import { WhyUs } from "@/components/sections/why-us";
import { siteMeta, socialLinks, testimonials } from "@/lib/site";

const legacyPoints = [
  "Manual, repetitive work slows down daily operations.",
  "Fragmented tools make customer response inconsistent.",
  "Scaling often adds overhead before it adds capacity.",
];

const aiPoints = [
  "Automated workflows keep routine work moving around the clock.",
  "Connected data gives teams clearer, faster decisions.",
  "Secure systems scale without adding unnecessary complexity.",
];

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram,
  Facebook,
  X,
  WhatsApp: MessageCircle,
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-use" },
  { label: "Security", href: "/privacy-policy" },
];

export default function MobileHomePage() {
  return (
    <div className="md:hidden">
      <HomeHero />
      <MobileAISection />
      <WhyUs />
      <MobileTestimonials />
      <MobileContact />
      <MobileFooter />
    </div>
  );
}

function MobileAISection() {
  return (
    <section className="bg-[#E6F2FF] py-8 text-slate-900">
      <div className="container px-4">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-700/20 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            The AI Revolution In Operations
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900">
            Transforming Business Operations with AI + Data Science.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            The shift to AI-native operations means moving away from slow,
            manual processes. We build custom AI automation, intelligent data
            pipelines, and bank-grade data security into your business.
          </p>
        </header>

        <div className="mt-6 grid gap-4">
          <article className="rounded-2xl border border-slate-300/80 bg-white/90 p-5 shadow-md">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-slate-900">
                Traditional Slow &amp; Expensive Legacy Model
              </h3>
              <span className="shrink-0 rounded-full bg-rose-50 p-2 text-rose-600">
                <ArrowRight className="h-4 w-4 rotate-45" />
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {legacyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-5 text-white shadow-xl">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-white">
                AI-Native Revolution
              </h3>
              <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-200">
                <Workflow className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-xs font-semibold text-cyan-300">
              Fast, Scalable &amp; Secure
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
              {aiPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function MobileTestimonials() {
  return (
    <section className="bg-[#E6F2FF] py-8 text-slate-900">
      <div className="container px-4">
        <header className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-700/20 bg-white/75 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Client trust &amp; reviews
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900">
            What our global clients say about us.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Real testimonials from enterprises, startups, and brands across web,
            AI, e-commerce, and growth marketing.
          </p>
        </header>

        <div className="mt-6 grid gap-4">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.service || index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileContact() {
  return (
    <section id="contact" className="bg-[#E6F2FF] py-8">
      <div className="container px-4">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg">
          <div className="mb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800">
              Contact
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-slate-950">
              Request a consultation
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Share your business goals, timeline, and service needs. We’ll help
              you identify a practical next step.
            </p>
          </div>
          <ContactForm />
          <a
            href={`mailto:${siteMeta.email}`}
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <Mail className="h-4 w-4 text-cyan-700" />
            {siteMeta.email}
          </a>
        </div>
      </div>
    </section>
  );
}

function MobileFooter() {
  const footerSocials = [
    ...socialLinks,
    { label: "WhatsApp", href: siteMeta.whatsappLink },
  ];

  return (
    <footer className="bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Logo
          className="[&_svg]:shadow-glow"
          textClassName="[&_div:first-child]:text-white [&_div:last-child]:text-slate-400"
        />

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-slate-400">
          <span>© 2026 Zepra Tech</span>
          <span aria-hidden="true">|</span>
          <span>All Rights Reserved</span>
          {legalLinks.map((link) => (
            <span key={link.label} className="contents">
              <span aria-hidden="true">|</span>
              <Link href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <ul className="flex flex-wrap gap-3" aria-label="Social media">
          {footerSocials.map((social) => {
            const Icon = socialIcons[social.label];
            const isExternal = social.href.startsWith("http");
            if (!Icon) return null;

            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}