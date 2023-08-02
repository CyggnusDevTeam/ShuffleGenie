import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { defaultLanguage } from './i18n/locales/en/english.json';
import { brazilian } from './i18n/locales/pt_BR/brazilian.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
    },
    resources: {
      en: defaultLanguage,
      pt_BR: brazilian,
    },
  });
