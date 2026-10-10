import { describe, expect, it } from "bun:test";
import { servicePolicy } from "./service-policy";

describe("service policy", () => {
  it("preserves the existing adult-only minimum age", () => {
    expect(servicePolicy.minimumAge).toBe(18);
  });
  it("preserves the existing two-hour cancellation notice", () => {
    expect(servicePolicy.cancellationNoticeHours).toBe(2);
  });
  it("references the exact course supplied by the user", () => {
    expect(servicePolicy.courseUrl).toBe("https://www.udemy.com/course/award-winning-isla-verde-spa-relaxation-massage-masterclass/");
  });
});