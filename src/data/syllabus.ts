/* =============================================================================
 * SYLLABUS DATASET (SOP A6.3 + Appendix G: T-SYLLABUS)
 * Powers syllabus pages + Learning Units for both verticals.
 * Course / ItemList JSON-LD source.
 *
 * ⚠️ ALL ROWS `illustrative: true` — structural placeholders. Confirm topics,
 *    units and PYQ weightage against the official syllabus before publishing.
 * =============================================================================
 */

import type { Vertical } from "@/config/site";

export interface SyllabusRow {
  vertical: Vertical;
  /** Subject (CUET) or section (IPMAT), e.g. "Quantitative Aptitude". */
  subjectOrSection: string;
  /** Unit within the subject/section. */
  unit: string;
  /** Specific topic within the unit. */
  topic: string;
  /** PYQ weightage tag, e.g. "high" | "medium" | "low" (estimate — label as such). */
  pyq_weightage_tag: "high" | "medium" | "low" | "unknown";
  illustrative: boolean;
}

export const syllabus: SyllabusRow[] = [
  {
    vertical: "CUET",
    subjectOrSection: "General Test",
    unit: "Quantitative Reasoning",
    topic: "[ILLUSTRATIVE — confirm against official CUET syllabus]",
    pyq_weightage_tag: "unknown",
    illustrative: true,
  },
  {
    vertical: "IPMAT",
    subjectOrSection: "Quantitative Aptitude",
    unit: "Arithmetic",
    topic: "[ILLUSTRATIVE — confirm against iimidr.ac.in / iimrohtak.ac.in]",
    pyq_weightage_tag: "unknown",
    illustrative: true,
  },
  {
    vertical: "IPMAT",
    subjectOrSection: "Verbal Ability",
    unit: "Reading Comprehension",
    topic: "[ILLUSTRATIVE — confirm against official source]",
    pyq_weightage_tag: "unknown",
    illustrative: true,
  },
];

export const syllabusForVertical = (v: Vertical): SyllabusRow[] =>
  syllabus.filter((r) => r.vertical === v);

export const syllabusIsIllustrativeOnly = (): boolean =>
  syllabus.every((r) => r.illustrative);
