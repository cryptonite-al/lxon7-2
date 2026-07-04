// Turn a movie title into its URL slug (matches the catalog slugs / backend).
// e.g. "Rainbow City" -> "rainbow-city"
export const toSlug = (t: string): string =>
  t.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
