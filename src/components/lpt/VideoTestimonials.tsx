import { Play } from "lucide-react";
import { SectionHeader, Tbd } from "./shared";

/**
 * VideoTestimonials — student story cards. CUET + IPMAT only. No fabricated
 * names, ranks, or YouTube IDs (the previous placeholder video id was removed).
 * Cards are clearly-marked placeholders until real, consented videos exist.
 */
const colors = ["#FFE9D2", "#FFD7CC", "#FFEED7", "#FCE3DA", "#FFEED7", "#FFD7CC"];

export function VideoTestimonials() {
  return (
    <section className="bg-[#FDF6EC] py-12 md:py-16">
      <div className="container-lpt">
        <SectionHeader
          eyebrow="Student Stories"
          title={<>Why They Chose <span className="text-brand">LPT</span>?</>}
          subtitle="Real, consented student videos — to be added before launch. No stock or fabricated stories."
        />
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="marquee-track px-6">
          {[...colors, ...colors].map((color, i) => (
            <div
              key={i}
              className="group lift-card relative flex h-[310px] w-[270px] shrink-0 flex-col overflow-hidden rounded-[28px] border border-dashed border-brand/30 bg-white p-2.5 text-left"
            >
              <div
                className="relative flex-1 w-full overflow-hidden rounded-[20px] border border-black/[0.04]"
                style={{ background: `radial-gradient(circle at 20% 0%, ${color} 0%, transparent 80%), radial-gradient(circle at 90% 100%, #ffffff 0%, #f4f5f7 100%)` }}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/30 text-white">
                    <Play className="h-4 w-4 translate-x-[1px] fill-current" strokeWidth={0} />
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-black/30 backdrop-blur-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white border border-white/10">
                  Video to be added
                </div>
              </div>
              <div className="px-3 pb-3 pt-4">
                <div className="font-bold text-ink text-[1.1rem] leading-tight">
                  <Tbd label="student name" />
                </div>
                <div className="mt-1.5 text-[0.75rem] font-bold uppercase tracking-wider text-brand">
                  <Tbd label="CUET / IPMAT outcome" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
