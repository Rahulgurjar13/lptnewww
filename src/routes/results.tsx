import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/head";
import { ContentPage, Section } from "@/components/seo/ContentPage";
import { BRAND } from "@/config/site";
import { Tbd } from "@/components/lpt/shared";

export const Route = createFileRoute("/results")({
  head: () =>
    pageHead({
      title: `CUET & IPMAT Results — ${BRAND}`,
      description: `Verified CUET & IPMAT selections at ${BRAND}. Real, attributable results only.`,
      path: "/results",
    }),
  component: Results,
});

function Results() {
  return (
    <ContentPage
      canonicalPath="/results"
      crumbs={[{ name: "Home", item: "/" }, { name: "Results" }]}
      title="Our CUET & IPMAT Results"
      intro={
        <>
          {BRAND} publishes only verified, attributable CUET and IPMAT selections — never inflated or
          fabricated numbers. Confirmed selection lists and topper profiles will be published here from
          institute records.
        </>
      }
    >
      <Section id="verified" heading="Verified selections">
        <p>
          Result figures are pending verification: <Tbd label="selections" />. Each entry will name the
          student, exam, year and institute, and be backed by an official record before it appears here.
        </p>
      </Section>
    </ContentPage>
  );
}
