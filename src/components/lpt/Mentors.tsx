import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader, Tbd } from "./shared";
import m1 from "@/assets/mentor-1.jpg";
import m2 from "@/assets/mentor-2.jpg";
import m3 from "@/assets/mentor-3.jpg";
import m4 from "@/assets/mentor-4.jpg";

/**
 * Mentors — faculty carousel. Faculty must be REAL (E-E-A-T); we have no
 * verified profiles yet, so names/experience render as marked placeholders and
 * photos are decorative. Subject areas (CUET / IPMAT sections) are legitimate.
 * Wire real faculty from /faculty before publishing.
 */
const slots = [
  { img: m1, role: "IPMAT — Quantitative Aptitude" },
  { img: m2, role: "IPMAT — Verbal Ability" },
  { img: m3, role: "CUET — General Test" },
  { img: m4, role: "CUET — Domain Subjects" },
  { img: m1, role: "IPMAT — Logical Reasoning" },
  { img: m2, role: "CUET — Language" },
];

export function Mentors() {
  const [start, setStart] = useState(0);
  const visible = 4;
  const max = slots.length - visible;

  return (
    <section className="bg-[#FDF6EC] py-12 md:py-16">
      <div className="container-lpt">
        <SectionHeader
          align="left"
          eyebrow="Faculty"
          title={<>Learn from <span className="text-brand">The Best</span></>}
          subtitle="CUET & IPMAT mentors — real profiles, credentials and photos to be added before launch."
          action={
            <div className="flex gap-2">
              <button onClick={() => setStart(Math.max(0, start - 1))} disabled={start === 0} className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-white text-ink transition-all hover:border-brand hover:text-brand disabled:opacity-40" aria-label="Previous">
                <ChevronLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <button onClick={() => setStart(Math.min(max, start + 1))} disabled={start === max} className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white transition-all hover:bg-brand-dark disabled:opacity-40" aria-label="Next">
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          }
        />

        <div className="mt-12 overflow-hidden">
          <div
            className="grid grid-flow-col grid-cols-[repeat(auto-fit,minmax(240px,1fr))] auto-cols-[minmax(240px,1fr)] gap-5 transition-transform duration-500 md:auto-cols-[calc(25%-15px)]"
            style={{ transform: `translateX(calc(-${start} * (100% / ${visible} + 5px)))` }}
          >
            {slots.map((m, i) => (
              <article key={i} className="lift-card overflow-hidden rounded-3xl border border-hairline bg-white">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#FFEED7]">
                  <img src={m.img} alt="" aria-hidden width={768} height={896} loading="lazy" className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" />
                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand backdrop-blur">
                    <Tbd label="exp." />
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-bold text-ink">
                    <Tbd label="faculty name" />
                  </div>
                  <div className="mt-1 text-sm text-body">{m.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link to="/faculty" className="text-sm font-semibold text-brand hover:underline">
            Meet our faculty →
          </Link>
        </div>
      </div>
    </section>
  );
}
