import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/head";
import { ContentPage, Section } from "@/components/seo/ContentPage";
import { itemListSchema } from "@/lib/schema";
import { BRAND } from "@/config/site";
import { Tbd } from "@/components/lpt/shared";

/**
 * Faculty index (SOP H1 — ItemList). Faculty MUST be real (E-E-A-T); no
 * profiles are seeded, so this shows placeholder slots until verified bios,
 * credentials and photos are added.
 */
const faculty: { name: string; slug: string; role: string }[] = [
  // Populate with REAL faculty: { name, slug, role }. No fabricated names.
];

export const Route = createFileRoute("/faculty/")({
  head: () =>
    pageHead({
      title: `Faculty — ${BRAND}`,
      description: "Meet the CUET & IPMAT faculty at LPT Delhi-NCR — real mentors, credentials and subjects.",
      path: "/faculty",
    }),
  component: Faculty,
});

function Faculty() {
  return (
    <ContentPage
      canonicalPath="/faculty"
      crumbs={[{ name: "Home", item: "/" }, { name: "Faculty" }]}
      title="Our Faculty"
      intro={
        <>
          {BRAND}'s CUET and IPMAT mentors teach full-time across our Delhi-NCR centres. Verified
          faculty profiles — names, credentials, subjects and photos — are being added and will appear
          here before launch.
        </>
      }
      schema={[itemListSchema(faculty.map((f) => ({ name: f.name, url: `/faculty/${f.slug}` })))]}
    >
      <Section id="faculty" heading="Mentors">
        {faculty.length === 0 ? (
          <p>
            Faculty profiles pending verification: <Tbd label="real faculty" />. Each profile will list
            the mentor's subject, experience and credentials.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {faculty.map((f) => (
              <li key={f.slug} className="rounded-xl border border-hairline bg-white p-4">
                <a href={`/faculty/${f.slug}`} className="font-semibold text-ink hover:text-brand">
                  {f.name}
                </a>
                <div className="text-sm text-body">{f.role}</div>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </ContentPage>
  );
}
