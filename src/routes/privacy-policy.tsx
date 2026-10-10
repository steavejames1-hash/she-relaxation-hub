import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => legalHead("Privacy Policy", "How GentleGlow collects, uses and protects your personal information when you book a home service massage.", "/privacy-policy"),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>GentleGlow ("we", "us") respects your privacy. This policy explains what information we collect when you visit this website or book a home service massage in Islamabad or Rawalpindi, and how we use it.</p>
      <h2>Information we collect</h2>
      <ul>
        <li>Your name, phone/WhatsApp number and address, shared by you when booking.</li>
        <li>Preferred appointment time and any health notes you choose to share (e.g. injuries, pregnancy, allergies).</li>
        <li>Technical website data, such as browser information and request logs, which our hosting provider may process to operate and secure the website.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To confirm, schedule and deliver your appointment.</li>
        <li>To tailor the massage safely to your needs.</li>
        <li>To contact you about your booking.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We never sell or rent your information. Booking messages are processed through WhatsApp under its own privacy policy, and our hosting provider processes website requests. We disclose information only as needed to deliver the service, with your permission, or where required by law.</p>
      <h2>Retention and security</h2>
      <p>We limit access to booking details and health notes to those needed to arrange and safely deliver your session. We retain information only as needed for the booking, legal obligations or disputes, then delete it where possible. No online service can guarantee absolute security.</p>
      <h2>Sensitive information and consent</h2>
      <p>Share only health information relevant to safe relaxation massage; do not send identity documents, intimate photographs or unnecessary medical records. We use health notes only for safety and suitability, not diagnosis or treatment. We do not publish client names, addresses, photographs, messages or testimonials without explicit permission. Marketing contact requires separate consent.</p>
      <h2>WhatsApp and privacy requests</h2>
      <p>Bookings take place on WhatsApp, not through a form on this website. WhatsApp may process information outside Pakistan under its own terms. To request access, correction or deletion, contact us using the details below. We may need to verify your request and retain information where legally required. Deleting our copy does not delete copies held by WhatsApp or other message recipients.</p>
      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information by emailing us.</p>
    </LegalPage>
  ),
});
