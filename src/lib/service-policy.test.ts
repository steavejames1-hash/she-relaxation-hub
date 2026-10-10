import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { servicePolicy } from "./service-policy";

describe("service policy", () => {
  it("preserves the existing adult-only minimum age", () => {
    strictEqual(servicePolicy.minimumAge, 18);
  });
  it("preserves the existing two-hour cancellation notice", () => {
    strictEqual(servicePolicy.cancellationNoticeHours, 2);
  });
  it("references the exact course supplied by the user", () => {
    strictEqual(servicePolicy.courseUrl, "https://www.udemy.com/course/award-winning-isla-verde-spa-relaxation-massage-masterclass/");
  });
});