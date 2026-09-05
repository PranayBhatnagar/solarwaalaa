import { Zap, Landmark, Building2, Percent, Wallet, type LucideIcon } from "lucide-react";

/**
 * Government subsidy + financing stats for the homepage "Government
 * Schemes & Financing" section and the /financing page.
 *
 * Sourced from the September 2026 research pass against official sources
 * (pmsuryaghar.gov.in, mnre.gov.in, upnedasolarrooftopportal.com,
 * sbi.bank.in, bankofbaroda.bank.in) — see the internal research dossier.
 * These are indicative figures published by government/bank sources at
 * research time and are subject to change; re-verify before quoting a
 * figure as final to a customer (spec section 17, Content Rules).
 *
 * "Zero Upfront Cost" (featured=true) is deliberately NOT backed by a
 * verified figure the way the other four are — it's a business-side
 * commitment communicated on the site at the founder's direction, with
 * details deferred to the sales conversation rather than published here.
 */
export type SchemeStat = {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const schemeStats: SchemeStat[] = [
  {
    id: "zero-upfront",
    value: "Zero Upfront Cost*",
    label: "Ask us how",
    icon: Zap,
    featured: true,
  },
  {
    id: "central-subsidy",
    value: "₹78,000",
    label: "Central government subsidy (PM Surya Ghar)",
    icon: Landmark,
  },
  {
    id: "up-subsidy",
    value: "₹30,000",
    label: "Additional Uttar Pradesh state subsidy",
    icon: Building2,
  },
  {
    id: "loan-rate",
    value: "5.75%",
    label: "Starting rate, collateral-free solar loan",
    icon: Percent,
  },
  {
    id: "financing",
    value: "90%",
    label: "Of project cost available as financing",
    icon: Wallet,
  },
];
