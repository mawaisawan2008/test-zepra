import Link from "next/link";
import { Globe, Mail, PhoneCall, Users2 } from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteMeta, socialLinks } from "@/lib/site";

export function ContactSection({ showHeader = true }) {
  return (
    <section id="contact" className="section-shell relative isolate overflow-hidden bg-gradient-to-b from-[#070c18] via-[#0b132b] to-[#0e1f38]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_16%_12%,rgba(56,198,255,0.12),transparent_58%)]" />
      <div className="container">
        {showHeader ? (
          <SectionHeading
            eyebrow="Contact"
            title="Start a business conversation with Zepra Tech."
            description="Use the inquiry form for web development, AI automation, digital marketing, ecommerce, design, SEO, or technical support needs."
          />
        ) : null}

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="space-y-6">
            <Card className="card-shine bg-white/90 backdrop-blur-md border border-slate-200/80 text-white shadow-[0_24px_64px_rgba(15,35,65,0.18)]">
              <CardHeader>
                <Badge className="border-cyan-200/20 bg-cyan-200/10 text-cyan-100">Business inquiry</Badge>
                <CardTitle className="pt-2 text-2xl text-white">
                  Clear contact options for local and international clients.
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-slate-300">
                <InfoRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={siteMeta.email}
                />
                <InfoRow
                  icon={<PhoneCall className="h-5 w-5" />}
                  label="WhatsApp"
                  value={siteMeta.whatsappNumber}
                />
                <InfoRow
                  icon={<Globe className="h-5 w-5" />}
                  label="Markets"
                  value="Pakistan and international businesses"
                />
                <InfoRow
                  icon={<Users2 className="h-5 w-5" />}
                  label="Best for"
                  value="Web, AI, growth, ecommerce, and support projects"
                />
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Button asChild size="lg">
                <Link href={siteMeta.whatsappLink} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`mailto:${siteMeta.email}`}>Send an Email</Link>
              </Button>
            </div>

            <Card className="border-slate-200/80 bg-white/90">
              <CardHeader>
                <CardTitle className="text-xl">Social presence</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary/20 hover:text-primary"
                  >
                    {social.label}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_24px_64px_rgba(15,35,65,0.08)]">
            <CardHeader>
              <CardTitle className="text-2xl">Request a consultation</CardTitle>
              <p className="text-sm leading-7 text-brand-slate">
                Share your business goals, timeline, and service needs. The
                form now works as a frontend-only inquiry draft that opens your
                email app with the details filled in.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-200/10 text-cyan-100">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{label}</div>
        <div className="mt-1 text-sm leading-6 text-slate-300">{value}</div>
      </div>
    </div>
  );
}
