import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { german } from './i18n/locales/de/german.json';
import { defaultLanguage } from './i18n/locales/en/english.json';
import { spanish } from './i18n/locales/es/spanish.json';
import { french } from './i18n/locales/fr/french.json';
import { hindi } from './i18n/locales/hi/hindi.json';
import { italian } from './i18n/locales/it/italian.json';
import { japanese } from './i18n/locales/ja/japanese.json';
import { korean } from './i18n/locales/ko/korean.json';
import { dutch } from './i18n/locales/nl/dutch.json';
import { brazilian } from './i18n/locales/pt_BR/brazilian.json';
import { russian } from './i18n/locales/ru/russian.json';
import { ukrainian } from './i18n/locales/uk/ukrainian.json';
import { chinese } from './i18n/locales/zh/chinese.json';

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
      de: german,
      en: defaultLanguage,
      es: spanish,
      fr: french,
      hi: hindi,
      it: italian,
      ja: japanese,
      ko: korean,
      nl: dutch,
      'pt-BR': brazilian,
      ru: russian,
      uk: ukrainian,
      zh: chinese,
    },
  });
