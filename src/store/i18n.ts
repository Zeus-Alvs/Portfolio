import { atom } from 'nanostores';

export type Language = 'en' | 'pt';

// Helper to get initial language
const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('app-lang') as Language;
    if (stored === 'en' || stored === 'pt') return stored;
    
    // Auto-detect from browser
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) return 'en';
    return 'pt'; // default fallback for client
  }
  return 'pt'; // default for SSR
};

export const currentLang = atom<Language>(getInitialLanguage());

// When language changes, update local storage
if (typeof window !== 'undefined') {
  currentLang.subscribe((lang) => {
    localStorage.setItem('app-lang', lang);
  });
}

export function toggleLanguage() {
  currentLang.set(currentLang.get() === 'en' ? 'pt' : 'en');
}
