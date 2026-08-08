import siteContent from "@/content/site.json";
import type { SiteContent } from "@/content/types";

/**
 * Central content accessor.
 * Keeping this as a function (rather than importing the JSON directly
 * in every component) means we have exactly one seam to swap the data
 * source later — e.g. a CMS fetch — without touching any component.
 */
export function getSiteContent(): SiteContent {
  return siteContent as SiteContent;
}
