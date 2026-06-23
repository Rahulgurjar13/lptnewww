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
    q: "Which IPMAT exams does LPT Delhi-NCR prepare students for?",
    a: <>We prepare students for IPMAT Indore, IPMAT Rohtak and JIPMAT — the integrated programme entrance tests — covering Quantitative Aptitude, Verbal Ability and (for Rohtak) Logical Reasoning, plus PI/WAT preparation.</>,
  },
  {
    q: "Is IPMAT coaching available online?",
    a: <>Yes. IPMAT coaching runs in offline, online and hybrid modes across our 4 Delhi-NCR centres. Book a free demo to choose the batch and mode that suit you.</>,
  },
];

export const Route = createFileRoute("/courses/ipmat")({
  head: () =>
    pageHead({
      title: `IPMAT Coaching in Delhi-NCR — ${BRAND}`,
      description: "IPMAT Indore & Rohtak and JIPMAT coaching in Delhi-NCR. Offline, online & hybrid batches, real faculty, mocks & PI/WAT prep. Book a free demo.",
      path: "/courses/ipmat",
    }),
  component: IpmatCourses,
});

function IpmatCourses() {
  return (
    <ContentPage
      canonicalPath="/courses/ipmat"
      crumbs={[
        { name: "Home", item: "/" },
        { name: "Courses", item: "/courses" },
        { name: "IPMAT" },
      ]}
      title="IPMAT Coaching in Delhi-NCR"
      introLead="In short:"
      intro={
        <>
          {BRAND} offers IPMAT (Indore &amp; Rohtak) and JIPMAT coaching covering Quantitative Aptitude,
          Verbal Ability, Logical Reasoning and PI/WAT, in offline, online and hybrid batches across 4
          Delhi-NCR centres. Fees and dates are confirmed during a free counselling call.
        </>
      }
      toc={[
        { id: "batches", label: "Batches & fees" },
        { id: "covered", label: "What's covered" },
        { id: "local", label: "Coaching near you" },
      ]}
      ctaMessage="Hi LPT Delhi-NCR, I want IPMAT batch details"
      faqs={faqs}
      schema={[
        courseSchema({
          name: "IPMAT Coaching (Indore, Rohtak & JIPMAT)",
          description: "IPMAT and JIPMAT coaching covering QA, Verbal, Logical Reasoning and PI/WAT, in offline, online and hybrid modes.",
          courseMode: "Blended",
          url: canonical("/courses/ipmat"),
        }),
      ]}
    >
      <Section id="batches" heading="Batches & fees">
        <ComparisonTable
          caption="IPMAT batches at LPT Delhi-NCR"
          date="to be confirmed"
          source="LPT Delhi-NCR"
          illustrative
          columns={[
            { key: "batch", header: "Batch" },
            { key: "mode", header: "Mode" },
            { key: "fee", header: "Fee" },
          ]}
          rows={[
            { batch: "IPMAT 2-Year Foundation", mode: "Offline / Online / Hybrid", fee: <Tbd label="fee" /> },
            { batch: "IPMAT Crash Course", mode: "Online", fee: <Tbd label="fee" /> },
            { batch: "IPMAT Test Series", mode: "Online", fee: <Tbd label="fee" /> },
          ]}
        />
        <p className="text-sm">Transparent fees are confirmed during counselling — no "enquire for price".</p>
      </Section>

      <Section id="covered" heading="What's covered">
        <ul className="list-disc space-y-2 pl-5">
          <li>Quantitative Aptitude — short-answer and MCQ strategy for Indore &amp; Rohtak patterns.</li>
          <li>Verbal Ability and Reading Comprehension.</li>
          <li>Logical Reasoning (for IIM Rohtak).</li>
          <li>Sectional strategy, full mocks, and PI/WAT preparation.</li>
        </ul>
      </Section>

      <Section id="local" heading="IPMAT coaching near you">
        <p>Find IPMAT coaching at your nearest Delhi-NCR centre:</p>
        <ul className="flex flex-wrap gap-2">
          {LANDING_AREAS.map((a) => (
            <li key={a.slug}>
              <a href={`/ipmat/coaching-in-${a.slug}`} className="btn-pill">
                IPMAT in {a.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </ContentPage>
  );
}
