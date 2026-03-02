import type { RouteLocationNormalizedLoaded, Router } from "vue-router";
import { getMerchById } from "@/services/merchService";

const SITE_URL = "https://lariat.live";
const SITE_NAME = "LARIAT";
const DEFAULT_IMAGE = `${SITE_URL}/assets/band.webp`;
const DEFAULT_TITLE = `${SITE_NAME} | Fayetteville, AR Indie Folktronica Band`;
const DEFAULT_DESCRIPTION =
  "LARIAT is a self-produced indie band from Fayetteville, Arkansas, blending alternative, folk, and electronic influences. Find music, live shows, merch, and booking info.";

type SeoPayload = {
  title: string;
  description: string;
  canonicalUrl: string;
  image: string;
  robots: string;
  ogType: string;
  structuredData?: Record<string, unknown> | null;
};

const buildUrl = (path = "/") => new URL(path, SITE_URL).toString();

const upsertMetaTag = (
  attributeName: "name" | "property",
  attributeValue: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attributeName}="${attributeValue}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonicalLink = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const upsertStructuredData = (data: Record<string, unknown> | null | undefined) => {
  const existing = document.head.querySelector<HTMLScriptElement>(
    'script[data-seo-structured-data="primary"]',
  );

  if (!data) {
    existing?.remove();
    return;
  }

  const script = existing || document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.seoStructuredData = "primary";
  script.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.appendChild(script);
  }
};

const getMusicGroupStructuredData = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: SITE_NAME,
  url,
  image: DEFAULT_IMAGE,
  description: DEFAULT_DESCRIPTION,
  foundingLocation: {
    "@type": "Place",
    name: "Fayetteville, Arkansas",
  },
  genre: [
    "Folktronica",
    "Indie Folk",
    "Bedroom Pop",
    "Alternative Rock",
    "Indie Pop",
    "Electronic",
  ],
  sameAs: [
    "https://www.instagram.com/lariat.wav/",
    "https://www.tiktok.com/@lariatmusic",
    "https://www.youtube.com/@lariat333",
    "https://open.spotify.com/artist/5BIlBjorSOpyXndhZfBUKM",
  ],
});

const getSeoPayload = (route: RouteLocationNormalizedLoaded): SeoPayload => {
  const canonicalUrl = buildUrl(route.fullPath || "/");
  const routeTitle = route.meta.title as string | undefined;
  const routeDescription = route.meta.description as string | undefined;
  const routeRobots = route.meta.robots as string | undefined;

  if (route.name === "MerchItemDetail") {
    const merchId = Number(route.params.id);
    const merchItem = getMerchById(merchId);

    if (merchItem) {
      const merchUrl = buildUrl(`/merch/${merchItem.id}`);
      const merchImage = buildUrl(merchItem.image);

      return {
        title: `${merchItem.name} | LARIAT Merch`,
        description: merchItem.description,
        canonicalUrl: merchUrl,
        image: merchImage,
        robots: "index, follow",
        ogType: "product",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Product",
          name: merchItem.name,
          image: [merchImage],
          description: merchItem.description,
          brand: {
            "@type": "Brand",
            name: SITE_NAME,
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: merchItem.new_price ?? merchItem.price,
            availability: "https://schema.org/InStock",
            url: merchUrl,
          },
        },
      };
    }
  }

  if (route.name === "SecretMusic") {
    return {
      title: routeTitle || "Secret Music | LARIAT",
      description: routeDescription || "Hidden bonus tracks and private LARIAT material.",
      canonicalUrl,
      image: DEFAULT_IMAGE,
      robots: routeRobots || "noindex, nofollow",
      ogType: "website",
      structuredData: null,
    };
  }

  if (route.name === "NotFound") {
    return {
      title: routeTitle || "Page Not Found | LARIAT",
      description: routeDescription || "The page you requested could not be found.",
      canonicalUrl,
      image: DEFAULT_IMAGE,
      robots: routeRobots || "noindex, follow",
      ogType: "website",
      structuredData: null,
    };
  }

  return {
    title: routeTitle || DEFAULT_TITLE,
    description: routeDescription || DEFAULT_DESCRIPTION,
    canonicalUrl,
    image: DEFAULT_IMAGE,
    robots: routeRobots || "index, follow",
    ogType: "website",
    structuredData: getMusicGroupStructuredData(canonicalUrl),
  };
};

const applySeo = (route: RouteLocationNormalizedLoaded) => {
  if (typeof document === "undefined") {
    return;
  }

  const seo = getSeoPayload(route);

  document.title = seo.title;
  document.documentElement.lang = "en";

  upsertMetaTag("name", "description", seo.description);
  upsertMetaTag("name", "robots", seo.robots);
  upsertMetaTag("property", "og:type", seo.ogType);
  upsertMetaTag("property", "og:site_name", SITE_NAME);
  upsertMetaTag("property", "og:title", seo.title);
  upsertMetaTag("property", "og:description", seo.description);
  upsertMetaTag("property", "og:url", seo.canonicalUrl);
  upsertMetaTag("property", "og:image", seo.image);
  upsertMetaTag("name", "twitter:card", "summary_large_image");
  upsertMetaTag("name", "twitter:title", seo.title);
  upsertMetaTag("name", "twitter:description", seo.description);
  upsertMetaTag("name", "twitter:image", seo.image);
  upsertCanonicalLink(seo.canonicalUrl);
  upsertStructuredData(seo.structuredData);
};

export const setupSeo = (router: Router) => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  router.afterEach((to) => {
    applySeo(to);
  });

  void router.isReady().then(() => {
    applySeo(router.currentRoute.value);
  });
};
