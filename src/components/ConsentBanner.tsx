import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { saveChoice, start, storedChoice, type Choice } from '../analytics';

const text = {
  en: {
    body: 'This site uses Google Analytics cookies to count visits.',
    accept: 'OK',
    reject: 'Reject',
  },
  pt: {
    body: 'Este site usa cookies do Google Analytics para contar as visitas.',
    accept: 'OK',
    reject: 'Recusar',
  },
};

// Starts Analytics (unless rejected before) and asks once per browser.
// Rendered into <body>, outside #root, so the pre-rendered home page never
// contains it: readers without JavaScript see no buttons that cannot work.
export const ConsentBanner: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    start();
    if (storedChoice() === null) setOpen(true);
  }, []);

  if (!open) return null;

  const choose = (choice: Choice) => {
    saveChoice(choice);
    setOpen(false);
  };
  const t = text[lang];

  return createPortal(
    <div
      role="region"
      aria-label="Analytics consent"
      className="no-print fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-sm z-[60] rounded-xl border border-slate-700/80 bg-[#0f1117]/95 backdrop-blur-md p-4 shadow-xl text-sm text-slate-300"
    >
      <p className="mb-3 leading-relaxed">{t.body}</p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => choose('denied')}
          className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-slate-100 transition-colors cursor-pointer"
        >
          {t.reject}
        </button>
        <button
          onClick={() => choose('granted')}
          className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors cursor-pointer"
        >
          {t.accept}
        </button>
      </div>
    </div>,
    document.body,
  );
};
