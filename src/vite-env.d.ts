// / <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_CKEDITOR_LICENSE_KEY: string | undefined;
  VITE_PAYPAL_CLIENT_ID: string;
  VITE_PAYPAL_YEARLY_PLAN_ID: string;
  VITE_PAYPAL_MONTHLY_PLAN_ID: string;
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
