import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/head";
import { ContentPage, Section } from "@/components/seo/ContentPage";
import { personSchema } from "@/lib/schema";
import { BRAND } from "@/config/site";
import { Tbd } from "@/components/lpt/shared";

/**
 * Faculty bio (SOP H1 prog · A5.7 Person). Programmatic per faculty slug.
 * No verified faculty data yet → renders a clearly-marked placeholder bio.
 * The Person schema is emitted with the slug; real name/role/credentials must
 * be wired from a faculty dataset before publishing (no fabricated people).
 */
export const Route = createFileRoute("/faculty/$slug")({
  head: ({ params }) =>
    pageHead({
      title: `Faculty Profile — ${BRAND}`,
      description: `CUET & IPMAT faculty profile at ${BRAND}.`,
      path: `/faculty/${params.slug}`,
      ogType: "article",
    }),
  component: FacultyBio,
});

function FacultyBio() {
  const { slug } = Route.useParams();
  return (
    <ContentPage
      canonicalPath={`/faculty/${slug}`}
      crumbs={[
        { name: "Home", item: "/" },
        { name: "Faculty", item: "/faculty" },
        { name: "Profile" },
      ]}
      title={
        <>
          Faculty Profile <Tbd label="name" />
        </>
      }
      intro={
        <>
          This is a CUET / IPMAT faculty profile for {BRAND}. Verified name, role, credentials and
          subjects taught are pending and will be added before publishing — no fabricated bios.
        </>
      }
      schema={[
        personSchema({
          name: "{{FACULTY_NAME}}",
          jobTitle: "{{FACULTY_ROLE}}",
          slug,
          knowsAbout: ["CUET", "IPMAT"],
        }),
      ]}
    >
      <Section id="bio" heading="About">
        <p>
          Profile content pending verification: <Tbd label="bio" />. Will include experience,
          qualifications, subjects, and links to authored articles.
        </p>
      </Section>
    </ContentPage>
  );
}
