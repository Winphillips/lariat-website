import type { Router } from "vue-router";

type AnalyticsParamValue = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsParamValue | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[] | undefined;
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "";

let analyticsInitialized = false;
let analyticsConfigured = false;
let lastTrackedPageLocation = "";

const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

const getCurrentPagePath = () =>
  `${window.location.pathname}${window.location.search}${window.location.hash}`;

const getCurrentPageLocation = () => window.location.href;

const getSanitizedParams = (params: AnalyticsParams) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  ) as Record<string, AnalyticsParamValue>;

const ensureGtag = () => {
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
};

const injectAnalyticsScript = () => {
  if (!measurementId) {
    return;
  }

  if (document.querySelector(`script[data-ga-measurement-id="${measurementId}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.gaMeasurementId = measurementId;
  document.head.appendChild(script);
};

export const isAnalyticsEnabled = () => Boolean(measurementId);

export const initAnalytics = () => {
  if (!isBrowser || !measurementId || analyticsInitialized) {
    return;
  }

  ensureGtag();
  injectAnalyticsScript();

  if (!analyticsConfigured) {
    window.gtag?.("js", new Date());
    window.gtag?.("config", measurementId, {
      send_page_view: false,
    });
    analyticsConfigured = true;
  }

  analyticsInitialized = true;
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (!isBrowser || !measurementId) {
    return;
  }

  initAnalytics();
  window.gtag?.("event", eventName, getSanitizedParams(params));
};

export const trackPageView = (pageTitle = document.title) => {
  if (!isBrowser || !measurementId) {
    return;
  }

  const pageLocation = getCurrentPageLocation();

  if (pageLocation === lastTrackedPageLocation) {
    return;
  }

  lastTrackedPageLocation = pageLocation;

  trackEvent("page_view", {
    page_title: pageTitle,
    page_location: pageLocation,
    page_path: getCurrentPagePath(),
  });
};

export const trackSectionView = (sectionName: string, sectionIndex: number) => {
  trackEvent("section_view", {
    section_name: sectionName,
    section_index: sectionIndex,
    page_path: getCurrentPagePath(),
  });
};

export const trackOutboundClick = (linkText: string, linkUrl: string) => {
  trackEvent("outbound_click", {
    link_text: linkText,
    link_url: linkUrl,
    page_path: getCurrentPagePath(),
  });
};

export const setupAnalytics = (router: Router) => {
  if (!isAnalyticsEnabled()) {
    return;
  }

  initAnalytics();

  router.afterEach(() => {
    trackPageView();
  });

  void router.isReady().then(() => {
    trackPageView();
  });
};
