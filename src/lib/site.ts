export const SITE_URL = "https://gentleglow-massage.com";
export const SITE_NAME = "GentleGlow";
export const WHATSAPP_URL = "https://wa.me/15514305027";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Canonical absolute URL for a root-relative path. */
export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Trim copy to a meta-description-safe length without cutting mid-word. */
export const trimDescription = (text: string, max = 150) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};
