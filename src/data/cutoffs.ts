/* =============================================================================
 * CUET CUTOFF DATASET (SOP A6.1 + Appendix G: T-CUTOFF-CUET)
 * Powers every cutoff page + the college predictor + Dataset JSON-LD (A5.4).
 *
 * ⚠️ ALL ROWS BELOW ARE `illustrative: true` PLACEHOLDERS. They exist only so
 *    components render. NEVER present them as fact. Replace with verified rows
 *    sourced from official university CSAS releases (source_url + verified_date)
 *    before publishing.
 * =============================================================================
 */

export type Category = "General" | "OBC-NCL" | "SC" | "ST" | "EWS" | "PwBD";

export interface CutoffRow {
  year: number;
  university: string;
  /** e.g. "Hindu College" */
  college: string;
  /** e.g. "B.A. (Hons) Economics" */
  course: string;
  category: Category;
  /** CSAS allotment round number. */
  round: number;
  /** Closing CUET score/percentile for this combination + round. */
  cutoff: number | null;
  source_url: string;
  /** ISO date the figure was verified against the official source. */
  verified_date: string;
  /** TRUE = placeholder seed row, not verified data. */
  illustrative: boolean;
}

export const cutoffs: CutoffRow[] = [
  {
    year: 2026,
    university: "Delhi University",
    college: "[ILLUSTRATIVE COLLEGE]",
    course: "B.A. (Hons) Economics",
    category: "General",
    round: 1,
    cutoff: null,
    source_url: "{{SOURCE_URL — official CSAS release}}",
    verified_date: "{{YYYY-MM-DD}}",
    illustrative: true,
  },
  {
    year: 2026,
    university: "Delhi University",
    college: "[ILLUSTRATIVE COLLEGE]",
    course: "B.Com (Hons)",
    category: "OBC-NCL",
    round: 1,
    cutoff: null,
    source_url: "{{SOURCE_URL — official CSAS release}}",
    verified_date: "{{YYYY-MM-DD}}",
    illustrative: true,
  },
  {
    year: 2026,
    university: "Delhi University",
    college: "[ILLUSTRATIVE COLLEGE]",
    course: "B.A. (Hons) English",
    category: "EWS",
    round: 2,
    cutoff: null,
    source_url: "{{SOURCE_URL — official CSAS release}}",
    verified_date: "{{YYYY-MM-DD}}",
    illustrative: true,
  },
];

/** True if the dataset has no verified (non-illustrative) rows yet. */
export const cutoffsAreIllustrativeOnly = (): boolean =>
  cutoffs.every((r) => r.illustrative);
