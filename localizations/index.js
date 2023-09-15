import LocalizedStrings from 'react-native-localization';
import { be } from './data/be';
import { de } from './data/de';
import { en } from './data/en';
import { pl } from './data/pl';
import { ua } from './data/ua';

export const localizations = new LocalizedStrings({
  be: { ...be },
  de: { ...de },
  en: { ...en },
  pl: { ...pl },
  ua: { ...ua },
});

export const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Język polski' },
  { code: 'be', name: 'Беларуская мова' },
  { code: 'ua', name: 'Українська мова' },
  
];

export const getLanguageName = (languageCode) => {
  return languages.find(item => item.code === languageCode);
}