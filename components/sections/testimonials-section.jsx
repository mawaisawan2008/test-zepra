import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  const clientTestimonials = testimonials.filter(
    (testimonial) => testimonial.role !== "Verified testimonial slot",
  );

  return (
    <section className="section-shell bg-white/50">
      <div className="container">
        <SectionHeading
          eyebrow="Client Trust"
          title="Client feedback."
         
          align="center"
        />

        <div className="mx-auto mt-12 max-w-5xl">
          {clientTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
