export type ResumeLocale = "ko" | "en";

export function resolveResumeLocale(value?: string | string[]): ResumeLocale {
  const candidate = Array.isArray(value) ? value[0] : value;
  return candidate === "en" ? "en" : "ko";
}

export function localizedPath(path: string, locale: ResumeLocale): string {
  if (locale === "ko") return path;

  const url = new URL(path, "https://resume.local");
  url.searchParams.set("lang", locale);
  return `${url.pathname}${url.search}${url.hash}`;
}
