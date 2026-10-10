import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => legalHead("Cancellation & Refund Policy", "How to cancel or reschedule a GentleGlow home service appointment, and our refund policy.", "/cancellation-policy"),
  component: () => (
    <LegalPage title="Cancellation & Refund Policy">
      <h2>Rescheduling and cancelling</h2>
      <ul>
        <li>Please tell us on WhatsApp as early as possible if you need to cancel or change your appointment.</li>
        <li>We ask for at least 2 hours' notice so the time can be offered to another client.</li>
        <li>Repeated last-minute cancellations or no-shows may mean we cannot accept future bookings.</li>
      </ul>
      <h2>If we need to cancel</h2>
      <p>If the therapist must cancel for any reason, we will tell you as soon as possible and offer a new time.</p>
      <h2>Refunds</h2>
      <p>If you paid in advance and cancel with proper notice, or if we cancel, your payment will be refunded or moved to a new appointment. No refund is given if a session is ended because of inappropriate behaviour.</p>
    </LegalPage>
  ),
});
