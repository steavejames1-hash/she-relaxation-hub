import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";
import { servicePolicy } from "@/lib/service-policy";

export const Route = createFileRoute("/terms")({
  head: () => legalHead("Terms & Conditions", "Terms and conditions for booking GentleGlow home service massage in Islamabad and Rawalpindi.", "/terms"),
  component: () => (
    <LegalPage title="Terms & Conditions">
      <p>By booking a session with GentleGlow you agree to the following terms.</p>
      <h2>Nature of service</h2>
      <p>GentleGlow provides strictly professional, non-medical, non-sexual relaxation massage at the client's home, for female clients only, in Islamabad and Rawalpindi. Sexual requests, unwanted touching, harassment or threats result in refusal or immediate termination. Refunds are subject to our cancellation policy and applicable law.</p>
      <h2>Bookings</h2>
      <ul>
        <li>All bookings are made through WhatsApp. A booking is confirmed only once we reply to confirm it.</li>
        <li>Prices are shared on WhatsApp before the appointment and are payable as agreed.</li>
        <li>Clients must be {servicePolicy.minimumAge} years or older. Bookings for minors or male clients are not accepted.</li>
      </ul>
      <h2>Client responsibilities</h2>
      <ul>
        <li>Share accurate address and contact details.</li>
        <li>Tell us about any medical conditions, injuries, pregnancy or allergies before the session.</li>
        <li>Provide a safe, clean and private space for the session.</li>
      </ul>
      <h2>Therapist's rights</h2>
      <h2>Consent, draping and hygiene</h2>
      <ul>
        <li>Consent must be freely given before and throughout the session. You may refuse any technique, request different pressure or stop at any time.</li>
        <li>Professional draping is required. Intimate areas are never massaged, and no sexual contact is permitted.</li>
        <li>Clean equipment and fresh linen are used for each visit. A session may be declined for infection risks or unsafe conditions.</li>
        <li>No photographs, recordings or sharing of personal details without explicit permission.</li>
      </ul>
      <p>The therapist may refuse or stop a session if he feels unsafe, if the environment is unsuitable, or if the client behaves inappropriately.</p>
      <h2>Liability</h2>
      <p>Massage is not a substitute for medical treatment. Share relevant health concerns before booking and seek advice from a qualified healthcare professional where needed. Nothing in these terms excludes rights or liability that cannot lawfully be excluded.</p>
      <h2>Changes</h2>
      <p>We may update these terms at any time. The latest version is always on this page.</p>
    </LegalPage>
  ),
});
