// app/terms/page.jsx
import TermsClient from "./termsClient";

export const metadata = {
  title: "Terms & Conditions - CyA Space",
  description: "Terms and engagement guidelines for working with Hazim Aiman.",
};

const sections = [
  {
    title: "1. Engagement scope",
    body: "CyA Space collaborates on digital product strategy, design, and engineering deliverables. Each engagement is governed by a written statement of work outlining timelines, stakeholders, and outcomes.",
  },
  {
    title: "2. Communication cadence",
    body: "Project updates are shared through weekly async status notes and scheduled review sessions. Urgent blockers should be escalated via email or the agreed messaging channel.",
  },
  {
    title: "3. Intellectual property",
    body: "All approved deliverables become the property of the client after final payment, while CyA Space retains the right to reference anonymised learnings and non-sensitive visuals in portfolios.",
  },
  {
    title: "4. Payment terms",
    body: "Invoices are issued at project kickoff and milestone completion. Payment is due within 14 days unless otherwise stated in the statement of work.",
  },
  {
    title: "5. Confidentiality",
    body: "Any shared assets, credentials, or strategies remain confidential and are used solely for the purpose of the engagement.",
  },
  {
    title: "6. Changes and cancellations",
    body: "Scope adjustments will be documented in writing. Work paused or cancelled by the client is invoiced for the effort completed to date.",
  },
];

export default function Page() {
  return <TermsClient sections={sections} />;
}
