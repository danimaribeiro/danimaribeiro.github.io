import React from 'react';
import { Terminal, Globe } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'resume';
  onNavigate: (view: 'home' | 'resume') => void;
  lang: 'en' | 'pt';
  onToggleLang: () => void;
  navText: {
    home: string;
    resume: string;
    langToggle: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onToggleLang,
  navText,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#090a0f]/80 border-b border-slate-800/60 no-print">
      <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between relative z-10">
        <button
          onClick={() => {
            onNavigate('home');
            window.dispatchEvent(new Event('trigger-physics-easter-egg'));
          }}
          className="flex items-center gap-2.5 text-lg font-bold text-slate-100 hover:text-emerald-400 transition-colors cursor-pointer focus:outline-none"
          title="Click to drop physics emojis! (Easter Egg)"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <Terminal size={18} />
          </div>
          <span className="tracking-tight font-['Outfit']">
            danimar<span className="text-emerald-400 font-mono">.dev</span>
          </span>
        </button>

        <nav className="flex items-center gap-6 md:gap-8">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm md:text-base font-medium relative py-1 transition-colors cursor-pointer focus:outline-none ${
              currentView === 'home' ? 'text-emerald-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {navText.home}
            {currentView === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('resume')}
            className={`text-sm md:text-base font-medium relative py-1 transition-colors cursor-pointer focus:outline-none ${
              currentView === 'resume' ? 'text-emerald-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {navText.resume}
            {currentView === 'resume' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            )}
          </button>

          <div className="h-4 w-[1px] bg-slate-800" />

          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500/60 text-slate-200 text-xs font-mono font-semibold transition-all hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] cursor-pointer"
            title="Switch Language / Mudar Idioma"
          >
            <Globe size={13} className="text-emerald-400" />
            <span>{navText.langToggle}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
