"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { track } from "@/lib/analytics";
import { faqItems } from "@/data/faq";

/** FAQ accordion (spec 5.12) - 6-10 launch questions, see data/faq.ts for content/review notes. */
export function Faq() {
  return (
    <section className="py-16 sm:py-24 bg-cloud">
      <Container className="max-w-3xl flex flex-col gap-10">
        <SectionHeading eyebrow="FAQ" title="Common Questions" align="center" className="mx-auto" />
        <Accordion
          items={faqItems.map((item) => ({ id: item.id, question: item.question, answer: item.answer }))}
          onOpen={(id) => track({ name: "faq_opened", props: { faqId: id } })}
        />
      </Container>
    </section>
  );
}
