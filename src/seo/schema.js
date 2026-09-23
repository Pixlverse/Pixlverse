// JSON-LD structured data builders for rich results & local SEO.
import { SITE, FAQS, SERVICES } from "../data/site";

/* Social profiles Google can use to tie this entity together. Add more as
   they go live. */
const sameAs = [SITE.instagram];

// ProfessionalService / web design business — drives local pack + knowledge results.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "Pixlverse Web Studio",
  description:
    "Pixlverse is a website design and development studio in Kerala, India. We build fast, SEO-ready websites for businesses across India, the UK, Qatar and Dubai, and we stay on after launch to keep them secure, updated and growing.",
  url: SITE.url,
  email: SITE.email,
  image: SITE.defaultOgImage,
  logo: SITE.organizationLogo,
  foundingDate: SITE.founded,
  priceRange: "$$",
  knowsAbout: [
    "Website Design",
    "Web Development",
    "SEO Optimization",
    "Website Maintenance",
    "Website Redesign",
    "Domain and Hosting",
    "UI/UX Design",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  areaServed: SITE.areasServed.map((name) => ({ "@type": "Place", name })),
  serviceType: SERVICES.map((s) => s.title),
  sameAs,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.blurb,
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: SITE.areasServed,
    },
  })),
};

/**
 * Schema for one service's own page. A `Service` node with its provider and
 * area served is what makes these pages eligible to be understood as distinct
 * offerings rather than six paragraphs on one URL.
 */
export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.blurb,
    url: `${SITE.url}/services/${service.slug}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: SITE.areasServed.map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} — what's included`,
      itemListElement: service.points.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p },
      })),
    },
  };
}
