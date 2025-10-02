// app/privacy/page.jsx
import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy - CyA Space",
  description:
    "How CyA Space handles personal information during collaborations.",
};

const sections = [
  {
    title: "1. Data collected",
    body: "CyA Space collects only the information provided directly by clients or prospective partners, such as names, email addresses, project briefs, and feedback shared during collaboration.",
  },
  {
    title: "2. Use of data",
    body: "Details are used to plan projects, deliver agreed services, and maintain communication about timelines, invoices, and outcomes.",
  },
  {
    title: "3. Storage & security",
    body: "Project files and contact information are stored in secure cloud services with access restricted to Hazim Aiman. Sensitive assets are removed when engagements conclude.",
  },
  {
    title: "4. Sharing",
    body: "CyA Space never sells personal information. Data is shared only with trusted tools essential to delivering the work, such as project management or billing platforms.",
  },
  {
    title: "5. Your choices",
    body: "Clients can request an export or deletion of their stored information at any time by emailing hazimaiman.azman@gmail.com.",
  },
];

export default function Page() {
  return <PrivacyClient sections={sections} />;
}
