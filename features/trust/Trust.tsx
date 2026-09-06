import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/config";
import { testimonials, certifications } from "@/data/testimonials";

/**
 * Trust / Evidence (spec 5.11): testimonials, partner logos, certifications,
 * warranties, project counts, performance metrics - "only from verified
 * source data... gracefully hide unavailable fields." Renders nothing at
 * launch since neither testimonials nor certifications are populated yet.
 */
export function Trust() {
  const showTestimonials = siteConfig.flags.hasTestimonials && testimonials.length > 0;
  const showCertifications = siteConfig.flags.hasCertifications && certifications.length > 0;

  if (!showTestimonials && !showCertifications) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Trust" title="What Customers Say" align="center" className="mx-auto" />

        {showTestimonials ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="rounded-card border border-line bg-white p-6">
                <p className="text-ink/80">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-ink">
                  {testimonial.author}
                  {testimonial.role || testimonial.city ? (
                    <span className="block font-normal text-ink/70">
                      {[testimonial.role, testimonial.city].filter(Boolean).join(", ")}
                    </span>
                  ) : null}
                </footer>
              </blockquote>
            ))}
          </div>
        ) : null}

        {showCertifications ? (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {certifications.map((cert) => (
              <span key={cert.id} className="text-sm font-medium text-ink/70">
                {cert.name}
              </span>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
