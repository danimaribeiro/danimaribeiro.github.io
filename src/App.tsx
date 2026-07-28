import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { PrintResume } from './pages/PrintResume';
import { contentData } from './data/content';

export const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const [currentView, setCurrentView] = useState<'home' | 'resume'>('home');
  const [printMode, setPrintMode] = useState<null | 'en' | 'pt'>(null);

  useEffect(() => {
    // Check hash for dedicated PDF rendering mode (#print-en or #print-pt)
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#print-en') setPrintMode('en');
      else if (hash === '#print-pt') setPrintMode('pt');
      else setPrintMode(null);
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (printMode) {
    return <PrintResume content={contentData[printMode]} />;
  }

  const activeContent = contentData[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        lang={lang}
        onToggleLang={handleToggleLang}
        navText={activeContent.nav}
      />
      
      <main className="max-w-5xl w-full mx-auto px-6 flex-1">
        {currentView === 'home' ? (
          <Home
            content={activeContent}
            onNavigateToResume={() => {
              setCurrentView('resume');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <Resume content={activeContent} />
        )}
      </main>
    </div>
  );
};

export default App;
