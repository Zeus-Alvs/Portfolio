import { useStore } from '@nanostores/react';
import { currentLang, toggleLanguage } from '../store/i18n';

export default function LanguageSwitcher() {
  const lang = useStore(currentLang);

  return (
    <button
      onClick={toggleLanguage}
      className="btn-outline"
      style={{
        padding: '0.4rem 0.8rem',
        fontSize: '0.55rem',
        border: '0.5px solid rgba(255,255,255,0.2)',
        borderRadius: '2px',
        color: '#FFFFFF',
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '0.1em',
        cursor: 'pointer',
        background: 'transparent',
      }}
      aria-label="Toggle Language"
    >
      <span>{lang === 'en' ? 'EN' : 'PT'}</span>
    </button>
  );
}
