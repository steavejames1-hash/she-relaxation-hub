import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => legalHead("Terms & Conditions", "Terms and conditions for booking GentleGlow home service massage in Islamabad and Rawalpindi.", "/terms"),
  component: () => (
    <LegalPage title="Terms & Conditions">
      <p>By booking a session with GentleGlow you agree to the following terms.</p>
      <h2>Nature of service</h2>
      <p>GentleGlow provides professional, therapeutic, non-sexual relaxation massage at the client's home, for female clients only, in Islamabad and Rawalpindi. Any request for inappropriate or sexual services will end the session immediately with no refund.</p>
      <h2>Bookings</h2>
      <ul>
        <li>All bookings are made through WhatsApp. A booking is confirmed only once we reply to confirm it.</li>
        <li>Prices are shared on WhatsApp before the appointment and are payable as agreed.</li>
        <li>Clients must be 18 years or older.</li>
      </ul>
      <h2>Client responsibilities</h2>
      <ul>
        <li>Share accurate address and contact details.</li>
        <li>Tell us about any medical conditions, injuries, pregnancy or allergies before the session.</li>
        <li>Provide a safe, clean and private space for the session.</li>
      </ul>
      <h2>Therapist's rights</h2>
      <p>The therapist may refuse or stop a session if he feels unsafe, if the environment is unsuitable, or if the client behaves inappropriately.</p>
      <h2>Liability</h2>
      <p>Massage is not a substitute for medical treatment. We are not liable for any condition not disclosed before the session.</p>
      <h2>Changes</h2>
      <p>We may update these terms at any time. The latest version is always on this page.</p>
    </LegalPage>
  ),
});
