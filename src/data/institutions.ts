/* =============================================================================
 * INSTITUTION DATASET (SOP A6.2 + Appendix G: T-INSTITUTION)
 * Powers college/IIM profiles, predictor options, comparison pages.
 * EducationalOrganization JSON-LD source.
 *
 * ⚠️ ALL ROWS `illustrative: true` — placeholders only. Replace with verified
 *    institution data (NIRF, seats, fees from official sources) before publish.
 * =============================================================================
 */

export type InstitutionType = "University" | "College" | "IIM";

export interface InstitutionRow {
  name: string;
  type: InstitutionType;
  /** NIRF rank (number) or null if not applicable/unknown. */
  nirf: number | null;
  /** Courses offered via the relevant exam. */
  courses: string[];
  /** Total seats (number) or null if unknown. */
  seats: number | null;
  /** Fee string, e.g. "₹{{real fee}}". Never invent. */
  fees: string;
  /** Required CUET subjects / eligibility note. */
  required_subjects: string[];
  source_url: string;
  illustrative: boolean;
}

export const institutions: InstitutionRow[] = [
  {
    name: "IIM Indore",
    type: "IIM",
    nirf: null,
    courses: ["IPM (5-year Integrated Programme in Management)"],
    seats: null,
    fees: "{{REAL_FEE — verify iimidr.ac.in}}",
    required_subjects: ["IPMAT Indore score"],
    source_url: "https://iimidr.ac.in",
    illustrative: true,
  },
  {
    name: "IIM Rohtak",
    type: "IIM",
    nirf: null,
    courses: ["IPM (5-year Integrated Programme in Management)"],
    seats: null,
    fees: "{{REAL_FEE — verify iimrohtak.ac.in}}",
    required_subjects: ["IPMAT Rohtak score"],
    source_url: "https://iimrohtak.ac.in",
    illustrative: true,
  },
  {
    name: "[ILLUSTRATIVE CUET COLLEGE]",
    type: "College",
    nirf: null,
    courses: ["B.A. (Hons) Economics", "B.Com (Hons)"],
    seats: null,
    fees: "{{REAL_FEE}}",
    required_subjects: ["CUET — domain subjects per course"],
    source_url: "{{SOURCE_URL}}",
    illustrative: true,
  },
];

export const institutionsAreIllustrativeOnly = (): boolean =>
  institutions.every((r) => r.illustrative);
