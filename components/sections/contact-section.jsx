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
      className="section-shell relative isolate overflow-hidden bg-gradient-to-b from-[#E8F2FF] via-[#0F172A] to-[#090D16]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px] 3xl:max-w-[1800px]">
        {showHeader ? (
          <SectionHeading
            eyebrow="Contact"
            title="Start a business conversation with Zepra Tech."
            description="Use the inquiry form for web development, AI automation, digital marketing, ecommerce, design, SEO, or technical support needs."
            eyebrowClassName="px-5 py-2 text-xs sm:text-sm font-semibold"
            descriptionClassName="text-sm sm:text-base font-medium leading-relaxed text-slate-700"
          />
        ) : null}

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/95 p-7 shadow-lg backdrop-blur-md lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Business inquiry
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-slate-950">
                Clear contact options for local and international clients.
              </h2>

              <div className="mt-6 space-y-4">
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

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
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

              <div className="mt-4">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Schedule a direct call
                </h3>
                <Link
                  href={`${siteMeta.whatsappLink}?text=${encodeURIComponent("Hi, I would like to book a 15-minute discovery call.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-4 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
                      <CalendarDays className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-900">
                        Book a 15-min Discovery Call
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-600">
                        Pick a convenient time with our team
                      </span>
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-cyan-800 transition-colors group-hover:text-cyan-950">
                    Schedule Now
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <ul className="grid gap-3 sm:grid-cols-3">
                <TrustPoint
                  icon={<LockKeyhole className="h-4 w-4" />}
                  title="Strict NDA"
                  detail="100% Data Privacy"
                />
                <TrustPoint
                  icon={<Clock3 className="h-4 w-4" />}
                  title="24h Response"
                />
                <TrustPoint
                  icon={<Globe2 className="h-4 w-4" />}
                  title="Global Support"
                  detail="US & PK Timings"
                />
              </ul>
            </div>
          </div>

          <div className="relative flex h-full flex-col justify-between lg:col-span-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-cyan-500/10 blur-3xl"
            />
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xl">
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
      className="group flex min-w-0 items-center gap-3 transition-colors hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-800">
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
    <li className="flex min-w-0 items-start gap-2">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-800">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold leading-5 text-slate-900">
          {title}
        </span>
        {detail ? (
          <span className="block text-[11px] leading-4 text-slate-500">{detail}</span>
        ) : null}
      </span>
    </li>
  );
}