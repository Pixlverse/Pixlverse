import React from "react";
import { SITE } from "../../data/site";

/**
 * SEO — relies on React 19 native metadata hoisting.
 * Rendering <title>/<meta>/<link> anywhere lifts them into <head>.
 * `jsonLd` may be a single object or an array of schema objects.
 *
 * No keywords meta: Google dropped it as a ranking signal in 2009 and the
 * other majors followed. It only ever advertised your targets to competitors.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image,
  jsonLd,
  type = "website",
}) {
  const canonical = `${SITE.url}${path === "/" ? "" : path}`;
  const ogImage = image || SITE.defaultOgImage;
  const fullTitle = title || `${SITE.name} — ${SITE.tagline}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
