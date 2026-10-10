import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";
import { servicePolicy } from "@/lib/service-policy";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => legalHead("Cancellation & Refund Policy", "How to cancel or reschedule a GentleGlow home service appointment, and our refund policy.", "/cancellation-policy"),
  component: () => (
    <LegalPage title="Cancellation & Refund Policy">
      <h2>Rescheduling and cancelling</h2>
      <ul>
        <li>Please tell us on WhatsApp as early as possible if you need to cancel or change your appointment.</li>
        <li>We ask for at least {servicePolicy.cancellationNoticeHours} hours' notice before your confirmed appointment so the time can be offered to another client.</li>
        <li>Repeated last-minute cancellations or no-shows may mean we cannot accept future bookings.</li>
      </ul>
      <h2>If we need to cancel</h2>
      <p>If the therapist must cancel for any reason, we will tell you as soon as possible and offer a new time.</p>
      <h2>Refunds</h2>
      <p>If you paid in advance and cancel with at least {servicePolicy.cancellationNoticeHours} hours' notice, or if we cancel, you may choose a refund or transfer to a new appointment. Refunds are arranged on WhatsApp using the original payment method where possible; we will confirm the timing with you.</p>
      <h2>Late cancellations and no-shows</h2>
      <p>Any cancellation charge or deposit condition must be explained and agreed on WhatsApp before booking confirmation. This page does not introduce an automatic late-cancellation fee. Repeated no-shows may result in refusal of future bookings.</p>
      <h2>Safety, consent and inappropriate behaviour</h2>
      <p>You may stop a session at any time or decline any technique. If a session is stopped for a health or safety concern, we will discuss the unused portion and any refund fairly. Sexual requests, harassment, unwanted touching or threats end the session immediately; no refund is normally offered in those cases, subject to applicable law. Withdrawing consent alone is not inappropriate behaviour.</p>
    </LegalPage>
  ),
});
