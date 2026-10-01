import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Globe2,
  LockKeyhole,
  Mail,
  MessageCircle,
} from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteMeta, socialLinks } from "@/lib/site";

export function ContactSection({ showHeader = true }) {
  return (
    <section
      id="contact"
      className="section-shell relative isolate overflow-hidden bg-[#E6F2FF]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_16%_12%,rgba(56,198,255,0.12),transparent_58%)]"
      />
      <div className="container">
        {showHeader ? (
          <SectionHeading
            eyebrow="Contact"
            title="Start a business conversation with Zepra Tech."
            description="Use the inquiry form for web development, AI automation, digital marketing, ecommerce, design, SEO, or technical support needs."
          />
        ) : null}

        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Business inquiry
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-slate-950">
                Clear contact options for local and international clients.
              </h2>

              <div className="mt-6 space-y-3">
                <InfoRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  href={`mailto:${siteMeta.email}`}
                  value={siteMeta.email}
                />
                <InfoRow
                  icon={<MessageCircle className="h-5 w-5" />}
                  label="WhatsApp"
                  href={siteMeta.whatsappLink}
                  value={siteMeta.whatsappNumber}
                  external
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Button asChild size="lg" className="w-full">
                  <Link
                    href={siteMeta.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href={`mailto:${siteMeta.email}`}>
                    <Mail className="h-4 w-4" />
                    Send an Email
                  </Link>
                </Button>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Social presence
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-300 hover:bg-white hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                      {social.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md lg:flex-1">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <h3 className="font-display text-base font-semibold text-slate-950">
                    Built around your peace of mind
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <TrustPoint
                      icon={<LockKeyhole className="h-4 w-4" />}
                      title="Strict NDA Signed"
                      detail="100% Data Privacy"
                    />
                    <TrustPoint
                      icon={<Clock3 className="h-4 w-4" />}
                      title="24-Hour Response Guarantee"
                    />
                    <TrustPoint
                      icon={<Globe2 className="h-4 w-4" />}
                      title="Global Support"
                      detail="US & PK Timings"
                    />
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-5">
                  <h3 className="font-display text-base font-semibold text-slate-950">
                    Prefer a direct call?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Skip the form and book a quick 15-minute intro meeting with
                    our tech strategy team.
                  </p>
                  <Button asChild size="lg" className="mt-4 w-full">
                    <Link
                      href={`${siteMeta.whatsappLink}?text=${encodeURIComponent("Hi, I would like to book a 15-minute intro meeting with your tech strategy team.")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Book a 15-Min Call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-cyan-500/10 blur-3xl"
            />
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8">
              <div className="mb-6">
                <h2 className="font-display text-2xl font-semibold text-slate-950">
                  Request a consultation
                </h2>
                <p className="mt-2 text-sm leading-6 text-brand-slate">
                  Share your business goals, timeline, and service needs. The
                  form now works as a frontend-only inquiry draft that opens your
                  email app with the details filled in.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, href, value, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 transition-colors hover:border-cyan-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-800">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold text-slate-900">
          {label}
        </span>
        <span className="mt-0.5 block break-words text-sm text-slate-600">
          {value}
        </span>
      </span>
    </a>
  );
}

function TrustPoint({ icon, title, detail }) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-800">
        {icon}
      </span>
      <span>
        <span className="block text-sm font-semibold text-slate-900">
          {title}
        </span>
        {detail ? (
          <span className="mt-0.5 block text-xs text-slate-500">{detail}</span>
        ) : null}
      </span>
    </li>
  );
}