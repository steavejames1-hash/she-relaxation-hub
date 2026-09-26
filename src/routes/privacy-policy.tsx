import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => legalHead("Privacy Policy", "How Hadi Massage collects, uses and protects your personal information when you book a home service massage.", "/privacy-policy"),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>Hadi Massage ("we", "us") respects your privacy. This policy explains what information we collect when you visit this website or book a home service massage in Islamabad or Rawalpindi, and how we use it.</p>
      <h2>Information we collect</h2>
      <ul>
        <li>Your name, phone/WhatsApp number and address, shared by you when booking.</li>
        <li>Preferred appointment time and any health notes you choose to share (e.g. injuries, pregnancy, allergies).</li>
        <li>Basic, anonymous website usage data (browser type, pages visited) collected by our hosting provider.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To confirm, schedule and deliver your appointment.</li>
        <li>To tailor the massage safely to your needs.</li>
        <li>To contact you about your booking.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We never sell or rent your information. We do not share it with third parties except where required by law. Bookings are handled through WhatsApp, which has its own privacy policy.</p>
      <h2>Retention and security</h2>
      <p>We keep booking details only as long as needed to serve you, and take reasonable steps to keep them private. You can ask us to delete your information at any time.</p>
      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information by emailing us.</p>
    </LegalPage>
  ),
});
