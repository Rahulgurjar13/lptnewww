import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/head";
import { ContentPage, Section } from "@/components/seo/ContentPage";
import { courseSchema } from "@/lib/schema";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { BRAND, canonical } from "@/config/site";
import { Tbd } from "@/components/lpt/shared";
import { LANDING_AREAS } from "@/components/lpt/LocalLanding";
import type { FAQItem } from "@/components/seo/FAQ";

const faqs: FAQItem[] = [
  {
    q: "Does LPT Delhi-NCR offer CUET coaching offline and online?",
    a: <>Yes. CUET (UG) coaching is available in offline, online and hybrid modes across our 4 Delhi-NCR centres in Noida, Hauz Khas, GTB Nagar and Gurugram. Book a free demo to find the batch that fits your schedule.</>,
  },
  {
    q: "What is the fee for CUET coaching?",
    a: <>Fees vary by batch (live, crash, test series). Exact, transparent fees are confirmed during a free counselling call — we don't list "enquire for price" but do verify the current fee with our team.</>,
  },
];

export const Route = createFileRoute("/courses/cuet")({
  head: () =>
    pageHead({
      title: `CUET Coaching in Delhi-NCR — ${BRAND}`,
      description: "CUET (UG) coaching in Delhi-NCR — domain, general & language tracks. Offline, online & hybrid batches across 4 centres. Book a free demo.",
      path: "/courses/cuet",
    }),
  component: CuetCourses,
});

function CuetCourses() {
  return (
    <ContentPage
      canonicalPath="/courses/cuet"
      crumbs={[
        { name: "Home", item: "/" },
        { name: "Courses", item: "/courses" },
        { name: "CUET" },
      ]}
      title="CUET Coaching in Delhi-NCR"
      introLead="In short:"
      intro={
        <>
          {BRAND} offers CUET (UG) coaching covering domain subjects, the general test and languages,
          in offline, online and hybrid batches across 4 Delhi-NCR centres. Batches, fees and dates are
          confirmed during a free counselling call.
        </>
      }
      toc={[
        { id: "batches", label: "Batches & fees" },
        { id: "covered", label: "What's covered" },
        { id: "local", label: "Coaching near you" },
      ]}
      ctaMessage="Hi LPT Delhi-NCR, I want CUET batch details"
      faqs={faqs}
      schema={[
        courseSchema({
          name: "CUET (UG) Coaching",
          description: "CUET (UG) coaching covering domain, general and language tracks, in offline, online and hybrid modes.",
          courseMode: "Blended",
          url: canonical("/courses/cuet"),
          // No aggregateRating — added only with genuine reviews (SOP A5.3).
        }),
      ]}
    >
      <Section id="batches" heading="Batches & fees">
        <ComparisonTable
          caption="CUET batches at LPT Delhi-NCR"
          date="to be confirmed"
          source="LPT Delhi-NCR"
          illustrative
          columns={[
            { key: "batch", header: "Batch" },
            { key: "mode", header: "Mode" },
            { key: "fee", header: "Fee" },
          ]}
          rows={[
            { batch: "CUET UG Live", mode: "Offline / Online / Hybrid", fee: <Tbd label="fee" /> },
            { batch: "CUET Crash Course", mode: "Online", fee: <Tbd label="fee" /> },
            { batch: "CUET Test Series", mode: "Online", fee: <Tbd label="fee" /> },
          ]}
        />
        <p className="text-sm">Transparent fees are confirmed during counselling — no "enquire for price".</p>
      </Section>

      <Section id="covered" heading="What's covered">
        <ul className="list-disc space-y-2 pl-5">
          <li>Domain subjects aligned to your target university and course.</li>
          <li>General Test — reasoning, quantitative and general awareness.</li>
          <li>Language section strategy.</li>
          <li>Proctored mocks and in-house study material.</li>
        </ul>
      </Section>

      <Section id="local" heading="CUET coaching near you">
        <p>Find CUET coaching at your nearest Delhi-NCR centre:</p>
        <ul className="flex flex-wrap gap-2">
          {LANDING_AREAS.map((a) => (
            <li key={a.slug}>
              <a href={`/cuet/coaching-in-${a.slug}`} className="btn-pill">
                CUET in {a.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </ContentPage>
  );
}
