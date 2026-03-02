/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LARIAT_SHEET_ID?: string;
  readonly VITE_SHOWS_SHEET_NAME?: string;
  readonly VITE_SECRET_SHEET_NAME?: string;
  readonly VITE_SECRET_SHEET_ID?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_MAILERLITE_ACCOUNT_ID?: string;
  readonly VITE_MAILERLITE_FORM_ID?: string;
  readonly VITE_NEWSLETTER_HEADING?: string;
  readonly VITE_NEWSLETTER_COPY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.wav" {
  const src: string;
  export default src;
}
