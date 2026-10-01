import { Quote } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TestimonialCard({ testimonial }) {
  return (
    <Card className="relative overflow-hidden border-slate-200/80 bg-white/90 p-6 sm:p-9">
      <div className="grid gap-7 sm:grid-cols-[auto_1fr] sm:gap-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-primary">
          <Quote className="h-5 w-5" />
        </div>
        <div>
          <CardHeader className="p-0">
            <CardTitle className="text-lg leading-8 text-slate-800 sm:text-xl sm:leading-9">
              “{testimonial.quote}”
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-7 flex flex-wrap items-end justify-between gap-3 border-t border-slate-200/80 px-0 pb-0 pt-5">
            <div>
              <div className="font-semibold text-slate-950">{testimonial.name}</div>
              <div className="mt-1 text-sm text-brand-slate">{testimonial.role}</div>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
              Client feedback
            </span>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
