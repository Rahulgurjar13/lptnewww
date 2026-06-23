import { SectionHeader, Tbd } from "./shared";

/**
 * Reviews — student testimonials. Reviews must be GENUINE (SOP A5.3 honor rule:
 * no fabricated reviews). We have none yet, so this renders a clearly-marked
 * placeholder. Wire real, attributable reviews before publishing; only then may
 * a real AggregateRating surface.
 */
export function Reviews() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-lpt grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
        <SectionHeader
          align="left"
          eyebrow="Reviews"
          title={<>What Students Actually <span className="text-brand">Say</span></>}
          subtitle="Genuine, attributable reviews only. Verified student reviews will appear here before launch."
        />

        <div className="relative">
          <div className="lift-card relative overflow-hidden rounded-3xl border border-dashed border-brand/40 bg-white p-8 md:p-10">
            <span aria-hidden className="block text-brand/20 mb-2" style={{ fontSize: "4.5rem", fontFamily: "Georgia, serif", lineHeight: 0.8 }}>
              "
            </span>
            <p className="h-display text-xl leading-[1.5] text-ink md:text-2xl">
              Real student review to be added here — quoted verbatim, attributed to a named, consenting
              student with their CUET/IPMAT outcome. <Tbd label="verified review" />
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full text-lg font-bold text-brand shrink-0" style={{ background: "#FFEED7" }}>
                <Tbd label="" />
              </div>
              <div>
                <div className="font-semibold text-ink">
                  <Tbd label="student name" />
                </div>
                <div className="text-xs text-body">Verified outcome — to be added</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
