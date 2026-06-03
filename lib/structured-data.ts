import { SITE_URL } from "@/lib/site-urls";
import type { Resource } from "@/lib/resources";
import type { SeoPage } from "@/lib/seo-pages";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mandarin Atlas",
    url: SITE_URL,
    description:
      "A comparison guide for Mandarin learning apps, websites, courses and tutor marketplaces.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Mandarin Atlas",
      url: SITE_URL
    }
  };
}

export function itemListJsonLd(name: string, description: string, resources: Resource[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    itemListElement: resources.map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/resources/${resource.slug}`,
      name: resource.name
    }))
  };
}

export function resourceJsonLd(resource: Resource) {
  return {
    "@context": "https://schema.org",
    "@type": resource.kind === "App" ? "SoftwareApplication" : "Course",
    name: resource.name,
    description: resource.tagline,
    url: `${SITE_URL}/resources/${resource.slug}`,
    image: `${SITE_URL}${resource.image}`,
    applicationCategory: resource.kind === "App" ? "EducationalApplication" : undefined,
    operatingSystem: resource.platforms.join(", "),
    offers: {
      "@type": "Offer",
      price: resource.priceModel === "Free" ? "0" : undefined,
      priceCurrency: "USD",
      availability: "https://schema.org/OnlineOnly",
      url: resource.websiteUrl
    },
    sameAs: resource.sourceLinks.map((source) => source.url)
  };
}

export function faqJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
