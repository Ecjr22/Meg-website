import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

const BASE_URL = "https://rootsandwingsliteracy.com";

export function SEO({ title, description, canonical, ogImage, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Roots & Wings Literacy`;

    const setMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMetaTag("description", description);
    setMetaTag("og:title", `${title} | Roots & Wings Literacy`, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", canonical || BASE_URL, true);
    setMetaTag("og:image", ogImage || `${BASE_URL}/og-image.png`, true);
    setMetaTag("og:site_name", "Roots & Wings Literacy", true);
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", `${title} | Roots & Wings Literacy`);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage || `${BASE_URL}/og-image.png`);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical || BASE_URL);

    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) script.remove();
    };
  }, [title, description, canonical, ogImage, jsonLd]);

  return null;
}

export const seoData = {
  home: {
    title: "Virtual Literacy Tutoring",
    description: "Roots & Wings Literacy offers personalized 1:1 virtual literacy tutoring for elementary-aged children. Specializing in dyslexia support, reading intervention, and foundational literacy skills with Miss Meg.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "name": "Roots & Wings Literacy",
      "description": "Virtual literacy tutoring for elementary-aged children, specializing in dyslexia support and reading intervention.",
      "url": BASE_URL,
      "email": "hello@rootsandwingsliteracy.com",
      "areaServed": "United States",
      "serviceType": "Virtual Tutoring",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Literacy Tutoring Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Dyslexia Support",
            "description": "Specialized instruction using evidence-based approaches for learners with dyslexia."
          },
          {
            "@type": "Service",
            "name": "Reading Intervention",
            "description": "Targeted support for struggling readers to close gaps and build confidence."
          },
          {
            "@type": "Service",
            "name": "Foundational Literacy Skills",
            "description": "Building strong phonemic awareness and decoding skills."
          }
        ]
      }
    }
  },
  services: {
    title: "Services",
    description: "Comprehensive virtual literacy tutoring services including dyslexia support, reading intervention, foundational literacy, spelling & writing, and reading comprehension for elementary-aged children.",
    canonical: `${BASE_URL}/services`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Roots & Wings Literacy"
      },
      "serviceType": "Virtual Literacy Tutoring",
      "areaServed": "United States",
      "description": "1:1 virtual literacy tutoring including dyslexia support, reading intervention, and foundational literacy skills."
    }
  },
  pricing: {
    title: "Pricing & Packages",
    description: "Flexible tutoring packages from Roots & Wings Literacy. Choose from Seedling, Sprout, Bloom, or Wings packages with personalized lesson plans and progress reports.",
    canonical: `${BASE_URL}/pricing`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Roots & Wings Literacy"
      },
      "name": "Literacy Tutoring Packages",
      "description": "Flexible virtual tutoring packages with personalized lesson plans and progress reports."
    }
  },
  about: {
    title: "About Miss Meg",
    description: "Meet Miss Meg, a dedicated literacy specialist passionate about helping children build strong reading skills and confidence through personalized 1:1 virtual tutoring.",
    canonical: `${BASE_URL}/about`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Miss Meg",
      "jobTitle": "Literacy Specialist",
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "Roots & Wings Literacy"
      },
      "description": "Dedicated literacy specialist helping children build strong reading skills through personalized virtual tutoring."
    }
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Roots & Wings Literacy. Book a free consultation to discuss your child's literacy needs and how virtual tutoring can help them flourish.",
    canonical: `${BASE_URL}/contact`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Roots & Wings Literacy",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "Roots & Wings Literacy",
        "email": "hello@rootsandwingsliteracy.com",
        "areaServed": "United States"
      }
    }
  }
};
