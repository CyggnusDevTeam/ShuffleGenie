import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage } from './i18n/locales/en/english.json';
import { brazilian } from './i18n/locales/pt_BR/brazilian.json';

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: defaultLanguage,
    pt_BR: brazilian,
  },
});
