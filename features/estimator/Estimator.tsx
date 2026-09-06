"use client";

import { useRef, useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { useQuoteDrawer } from "@/features/lead-form/QuoteDrawerContext";

/**
 * "Could Solar Work for You?" mini qualification widget (spec 5.7 / 6).
 * Inputs: monthly bill, property type, city, optional roof area. Per spec:
 * "MVP calculates only an indicative 'request assessment' state rather than
 * a financial promise" - no ROI/savings numbers are shown or implied.
 */
export function Estimator() {
  const [bill, setBill] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [roofArea, setRoofArea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { open } = useQuoteDrawer();
  const startedRef = useRef(false);

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      track({ name: "estimator_started" });
    }
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    track({ name: "estimator_completed" });
  }

  return (
    <section className="py-16 sm:py-24 bg-cloud">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <SectionHeading
          eyebrow="Quick Check"
          title="Could Solar Work for You?"
          subtitle="Answer a few quick questions and we'll let you know whether a full site assessment is worth arranging. No financial promises, just a starting point."
        />

        <div className="rounded-card border border-line bg-white p-6 sm:p-8">
          {submitted ? (
            <div role="status" className="flex flex-col gap-4">
              <p className="font-semibold text-ink">
                Your inputs suggest a solar assessment may be worthwhile.
              </p>
              <p className="text-sm text-ink/70">
                The next step is a proper site assessment. Request one below and Solarwaalaa will
                follow up with real numbers for your property.
              </p>
              <Button size="lg" onClick={() => open("estimator")} className="w-full sm:w-auto">
                Request a Solar Consultation
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={markStarted} className="flex flex-col gap-4">
              <Field label="Monthly electricity bill (₹, optional)" htmlFor="est-bill">
                <input
                  id="est-bill"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="e.g. 4000"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  className={inputClass}
                />
              </Field>

              <Field label="Property type" htmlFor="est-property">
                <select
                  id="est-property"
                  required
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select one</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="institutional">Institutional</option>
                </select>
              </Field>

              <Field label="City" htmlFor="est-city">
                <input
                  id="est-city"
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={inputClass}
                />
              </Field>

              <Field label="Roof area, sq. ft (optional)" htmlFor="est-roof">
                <input
                  id="est-roof"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={roofArea}
                  onChange={(e) => setRoofArea(e.target.value)}
                  className={inputClass}
                />
              </Field>

              <Button type="submit" size="lg" className="mt-1">
                Check
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "min-h-[44px] rounded-control border border-line px-3.5 py-2.5 text-ink bg-white focus:border-action focus-visible:outline-none";
