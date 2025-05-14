// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationBN from './locales/bn/translation.json';
import translationHI from './locales/hi/translation.json';
import translationUR from './locales/ur/translation.json';
import translationNE from './locales/ne/translation.json';
import translationTH from './locales/th/translation.json';
import translationMS from './locales/ms/translation.json';
import translationMY from './locales/my/translation.json';

const resources = {
  en: { translation: translationEN },
  bn: { translation: translationBN },
  hi: { translation: translationHI },
  ur: { translation: translationUR },
  ne: { translation: translationNE },
  th: { translation: translationTH },
  ms: { translation: translationMS }, // Malay
  my: { translation: translationMY }, // Burmese (Myanmar)
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
