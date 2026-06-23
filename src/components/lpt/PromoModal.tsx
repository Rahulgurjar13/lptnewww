import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { ArrowRight, Gift } from "lucide-react";

export function PromoModal({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      setSeen(true);
    }, 3500);
    return () => clearTimeout(t);
  }, [seen]);

  return (
    <Modal open={open} onClose={() => setOpen(false)} size="md">
      <div className="flex flex-col text-center">
        {/* Top Graphic Area */}
        <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[#0F1015]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/20 via-brand/0 to-transparent opacity-60" />
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
          
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
            <Gift className="h-8 w-8 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 pb-8 pt-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5F5] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand"></span>
            </span>
            Limited Time Offer
          </div>
          <h3 className="mt-5 font-display text-[22px] font-bold leading-tight text-ink">Apply for the LPT Scholarship</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-body">
            Take the LPT Scholarship Admission Test for CUET &amp; IPMAT batches. Scholarship amounts and
            eligibility are confirmed during counselling — book a free slot to know yours.
          </p>
          
          <div className="mt-8 flex flex-col gap-2">
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#c1121f] hover:shadow-[0_8px_20px_rgba(218,32,47,0.3)]"
            >
              Reserve My Slot Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl px-5 py-3 text-[13px] font-semibold text-body transition-colors hover:bg-black/5 hover:text-ink"
            >
              No thanks, I'll pay full price
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
