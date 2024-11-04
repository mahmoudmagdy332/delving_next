declare module 'next-i18next' {
    import { i18n as i18nInstance } from 'i18next';
  
    interface I18n extends i18nInstance {
      t(key: string, options?: Record<string, unknown>): string;
    }
  
    const i18n: I18n;
    export default i18n;
  }