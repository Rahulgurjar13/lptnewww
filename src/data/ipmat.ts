/* =============================================================================
 * IPMAT DATASETS (SOP Appendix G: T-EXAM-IPMAT, T-IPMAT-CUTOFF, T-COMPOSITE)
 * Powers the IPMAT exam/marking, cutoff, composite-score and admission pages.
 *
 * ⚠️ Exam STRUCTURE below mirrors the SOP C2 worked example (2026-cycle module).
 *    Every row is `verify: true` — re-confirm against iimidr.ac.in /
 *    iimrohtak.ac.in / the official JIPMAT bulletin before publishing. Specific
 *    perishable NUMBERS (cutoffs, composite weights) are left null / flagged and
 *    must NOT be presented as fact until verified.
 * =============================================================================
 */

export type InstituteSlug = "indore" | "rohtak" | "jipmat";

export interface Institute {
  slug: InstituteSlug;
  name: string;
  /** Short label used in headings. */
  short: string;
}

export const INSTITUTES: Institute[] = [
  { slug: "indore", name: "IIM Indore (IPM)", short: "Indore" },
  { slug: "rohtak", name: "IIM Rohtak (IPM)", short: "Rohtak" },
  { slug: "jipmat", name: "JIPMAT (IIM Jammu & Bodh Gaya)", short: "JIPMAT" },
];

export const getInstitute = (slug: string): Institute | undefined =>
  INSTITUTES.find((i) => i.slug === slug);

/* T-EXAM-IPMAT — three-exam comparison (structure from SOP C2). */
export interface ExamRow {
  exam: string;
  questionsMarksTime: string;
  sections: string;
  sectionalLock: string;
  negativeMarking: string;
  verify: boolean;
}

export const ipmatExam: ExamRow[] = [
  {
    exam: "IIM Indore",
    questionsMarksTime: "90 Q · 360 marks · 120 min",
    sections: "QA-SA (15) · QA-MCQ (30) · VA (45)",
    sectionalLock: "40 min / section",
    negativeMarking: "QA-SA: none · QA-MCQ & VA: −1",
    verify: true,
  },
  {
    exam: "IIM Rohtak",
    questionsMarksTime: "120 Q · 480 marks · 120 min",
    sections: "QA · VA · LR (40 each)",
    sectionalLock: "None",
    negativeMarking: "−1 in all sections",
    verify: true,
  },
  {
    exam: "JIPMAT (Jammu, Bodh Gaya)",
    questionsMarksTime: "per official bulletin",
    sections: "QA · VA",
    sectionalLock: "per official bulletin",
    negativeMarking: "per official bulletin",
    verify: true,
  },
];

/* T-IPMAT-CUTOFF — sectional cutoffs by institute × category.
 * cutoff values are null until verified (never fabricate). */
export type IpmatCategory = "General" | "EWS" | "OBC-NCL" | "SC" | "ST" | "PwD";

export interface IpmatCutoffRow {
  institute: InstituteSlug;
  section: string;
  category: IpmatCategory;
  cutoff: number | null;
  year: number;
  source_url: string;
  illustrative: boolean;
}

export const ipmatCutoffs: IpmatCutoffRow[] = [
  {
    institute: "indore",
    section: "Overall (sectional + composite)",
    category: "General",
    cutoff: null,
    year: 2026,
    source_url: "{{SOURCE_URL — iimidr.ac.in}}",
    illustrative: true,
  },
  {
    institute: "rohtak",
    section: "Overall",
    category: "General",
    cutoff: null,
    year: 2026,
    source_url: "{{SOURCE_URL — iimrohtak.ac.in}}",
    illustrative: true,
  },
];

/* T-COMPOSITE — composite scoring weights per institute.
 * Weights are ILLUSTRATIVE structure from the SOP module — verify against each
 * institute's official admission policy for the current cycle. */
export interface CompositeRow {
  institute: InstituteSlug;
  /** e.g. "Aptitude (IPMAT) %" */
  components: { label: string; weight: number | null }[];
  notes: string;
  verify: boolean;
}

export const ipmatComposite: Record<InstituteSlug, CompositeRow> = {
  indore: {
    institute: "indore",
    components: [
      { label: "IPMAT aptitude score", weight: null },
      { label: "Personal Interview (PI)", weight: null },
      { label: "Past academics", weight: null },
    ],
    notes:
      "IIM Indore uses an aptitude + PI composite (with academic/diversity factors). Exact weights vary by cycle — verify against iimidr.ac.in before publishing.",
    verify: true,
  },
  rohtak: {
    institute: "rohtak",
    components: [
      { label: "IPMAT aptitude score", weight: null },
      { label: "Personal Interview (PI)", weight: null },
      { label: "Past academics", weight: null },
    ],
    notes:
      "IIM Rohtak applies its own aptitude + PI weighting. Exact weights vary by cycle — verify against iimrohtak.ac.in before publishing.",
    verify: true,
  },
  jipmat: {
    institute: "jipmat",
    components: [{ label: "JIPMAT score", weight: null }],
    notes:
      "JIPMAT admission to IIM Jammu / Bodh Gaya follows the official JIPMAT process — verify the current composite/selection rule against the official portal.",
    verify: true,
  },
};

export const ipmatHasVerifiedCutoffs = (): boolean =>
  ipmatCutoffs.some((r) => !r.illustrative);
