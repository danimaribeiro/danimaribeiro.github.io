import React from 'react';
import { Content } from '../data/content';

interface PrintResumeProps {
  content: Content;
}

export const PrintResume: React.FC<PrintResumeProps> = ({ content }) => {
  const { resumePage, contact } = content;

  return (
    <div className="bg-white text-gray-900 font-sans p-8 max-w-[210mm] mx-auto text-sm leading-normal">
      {/* HEADER SECTION */}
      <header className="border-b-2 border-gray-200 pb-4 mb-5">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
          {resumePage.title}
        </h1>
        <p className="text-base font-semibold text-emerald-700 mb-2">
          {resumePage.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-gray-600">
          <span>📧 {contact.email}</span>
          <span>🌐 github.com/danimaribeiro</span>
          <span>💼 linkedin.com/in/danimaribeiro</span>
          <span>📍 Florianópolis, Brazil / Remote</span>
        </div>
      </header>

      {/* TECHNICAL SKILLS */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-3">
          {resumePage.skillsTitle}
        </h2>
        <div className="grid grid-cols-2 gap-4 text-xs">
          {resumePage.skills.map((group, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-bold text-gray-900 block font-mono">
                • {group.category}:
              </span>
              <p className="text-gray-700 leading-snug pl-3">
                {group.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SUMMARY */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-3">
          {resumePage.experienceTitle}
        </h2>
        <div className="space-y-5">
          {resumePage.experiences.map((exp, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-baseline font-bold text-gray-900 text-sm">
                <span>{exp.role}</span>
                <span className="text-xs text-gray-600 font-mono font-medium">{exp.period}</span>
              </div>
              <div className="text-xs text-emerald-800 font-semibold mb-1">
                {exp.company} — <span className="font-normal text-gray-600">{exp.location}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 pl-1">
                {exp.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="leading-snug">
                    {hl.replace('[[Placeholder]]', '')}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
          {resumePage.educationTitle}
        </h2>
        <div className="space-y-2 text-xs">
          {resumePage.education.map((edu, idx) => (
            <div key={idx} className="flex justify-between items-baseline">
              <div>
                <span className="font-bold text-gray-900">{edu.degree}</span>
                <span className="text-gray-700"> ({edu.institution})</span>
              </div>
              <span className="text-gray-600 font-mono">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
