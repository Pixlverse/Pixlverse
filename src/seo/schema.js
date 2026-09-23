// JSON-LD structured data builders for rich results & local SEO.
import { SITE, FAQS, SERVICES } from "../data/site";

const sameAs = []; // add social profile URLs here when available

// ProfessionalService / web design business — drives local pack + knowledge results.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "Pixlverse Web Studio",
  description:
    "Pixlverse is a website design and development studio in Kerala, India, building elegant, high-performing, SEO-optimised websites for businesses across India and beyond.",
  url: SITE.url,
  email: SITE.email,
  image: SITE.defaultOgImage,
  logo: SITE.defaultOgImage,
  foundingDate: SITE.founded,
  priceRange: "$$",
  knowsAbout: [
    "Website Design",
    "Web Development",
    "SEO Optimization",
    "Website Maintenance",
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
