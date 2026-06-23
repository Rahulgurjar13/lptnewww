import { Reveal } from "./Reveal";
import { Eyebrow, Tbd } from "./shared";
import { ArrowRight, GraduationCap, Calendar, BookOpen, Users } from "lucide-react";
import { CENTRES } from "@/config/site";

/**
 * TrackRecord — headline metrics. Only the verifiable metric (centre count) is
 * stated; all unverified figures render as marked placeholders (SOP: no
 * fabricated numbers).
 */
const stats = [
  { value: null as string | null, label: "Verified Selections", icon: <GraduationCap className="h-5 w-5" strokeWidth={1.75} />, placeholder: "count" },
  { value: null, label: "Years of Legacy", icon: <Calendar className="h-5 w-5" strokeWidth={1.75} />, placeholder: "years" },
  { value: null, label: "Avg Teacher Experience", icon: <BookOpen className="h-5 w-5" strokeWidth={1.75} />, placeholder: "years" },
  { value: String(CENTRES.length), label: "Delhi-NCR Centres", icon: <Users className="h-5 w-5" strokeWidth={1.75} />, placeholder: "" },
];

export function TrackRecord({ onBook }: { onBook: () => void }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-lpt">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[#FFEED7] p-8 md:p-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <Eyebrow>Track Record</Eyebrow>
                <h2 className="mt-3 h-display text-3xl sm:text-4xl md:text-5xl">
                  Our Track Record of <span className="text-brand">Trust</span> &amp; Results
                </h2>
                <p className="mt-5 max-w-md text-body">
                  CUET and IPMAT coaching across Delhi-NCR. Verified figures will be filled in here —
                  we publish numbers only when they're confirmed.
                </p>
                <button onClick={onBook} className="btn-primary mt-8">
                  Schedule a Free Session <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {stats.map((s) => (
                  <div key={s.label} className="lift-card rounded-3xl border border-white/60 bg-white p-6">
                    <span className="icon-bubble">{s.icon}</span>
                    <div className="mt-5 h-display text-3xl sm:text-4xl md:text-5xl text-ink">
                      {s.value ?? <Tbd label={s.placeholder} />}
                    </div>
                    <div className="mt-1 text-sm font-medium text-body">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
