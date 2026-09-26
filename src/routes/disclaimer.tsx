import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => legalHead("Disclaimer", "Health and service disclaimer for Hadi Massage home service relaxation massage.", "/disclaimer"),
  component: () => (
    <LegalPage title="Disclaimer">
      <p>The information on this website is for general information only.</p>
      <h2>Not medical advice</h2>
      <p>Our massage is for relaxation and general wellbeing. It is not a medical treatment and does not diagnose or cure any illness. If you have a health condition, please consult your doctor before booking.</p>
      <h2>Health conditions</h2>
      <p>If you are pregnant, recovering from surgery, or have heart problems, high blood pressure, skin conditions, blood clots or other medical concerns, tell us before your session. We may adjust or decline the session for your safety.</p>
      <h2>Professional service only</h2>
      <p>Hadi Massage offers strictly professional, therapeutic, non-sexual massage. We do not offer any adult services.</p>
      <h2>External links</h2>
      <p>This site links to WhatsApp and other third-party services. We are not responsible for their content or policies.</p>
    </LegalPage>
  ),
});
