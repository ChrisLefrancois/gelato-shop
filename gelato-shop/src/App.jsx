import { useState, useEffect } from 'react';
import MainContent from './components/MainContent';
import translations from './components/Translation';
import './App.css';

function App() {
  const [language, setLanguage] = useState(null);

  // Load saved language from localStorage on first render
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Save language to localStorage when selected
  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    document.body.style.overflow = language ? 'auto' : 'hidden';
  }, [language]);

  return (
    <div className="app-container">
      {!language && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1>Choose Your Language</h1>
            <div className="button-group">
              <button onClick={() => handleLanguageSelect('en')}>English</button>
              <button onClick={() => handleLanguageSelect('fr')}>Français</button>
            </div>
          </div>
        </div>
      )}

{language && (
  <MainContent
    t={translations[language]}
    language={language}
    onLanguageChange={(lang) => {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }}
  />
)}
    </div>
  );
}

export default App;
