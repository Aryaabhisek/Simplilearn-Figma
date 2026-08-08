// lib/getContent.ts — the single read seam
import siteContent from "@/content/site.json";
import type { SiteContent } from "@/content/types";

export function getSiteContent(): SiteContent {
  return siteContent as SiteContent;
}