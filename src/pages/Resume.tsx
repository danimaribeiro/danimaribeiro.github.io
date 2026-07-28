import React from 'react';
import { motion } from 'framer-motion';
import { Download, Info, CheckCircle2, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Content } from '../data/content';

interface ResumeProps {
  content: Content;
}

export const Resume: React.FC<ResumeProps> = ({ content }) => {
  const { resumePage } = content;

  return (
    <div className="w-full space-y-16 py-8">
      {/* HEADER & DOWNLOAD ACTION */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500" />

        <div className="space-y-2 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {resumePage.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-medium">
            {resumePage.subtitle}
          </p>
        </div>

        <a
          href={`/${resumePage.pdfName}`}
          target="_blank"
          download
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 shrink-0"
        >
          <Download size={18} />
          <span>{resumePage.downloadText}</span>
        </a>
      </motion.section>

      {/* PLACEHOLDER NOTICE BANNER */}
      <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm flex items-start gap-3 shadow-sm">
        <Info size={19} className="text-purple-400 shrink-0 mt-0.5" />
        <span className="leading-relaxed font-medium">{resumePage.placeholderNotice}</span>
      </div>

      {/* TECHNICAL SKILLS MATRIX */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Code size={18} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {resumePage.skillsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumePage.skills.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-6 space-y-4 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-base font-bold text-emerald-400 border-b border-slate-800 pb-3 font-mono">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/70 text-slate-200 text-xs font-medium font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK EXPERIENCE TIMELINE (PLACEHOLDERS READY) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-t border-slate-800 pt-10">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Briefcase size={18} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {resumePage.experienceTitle}
          </h2>
        </div>

        <div className="space-y-6">
          {resumePage.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 border-l-4 border-l-emerald-500 p-6 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-100">
                  {exp.role}
                </h3>
                <span className="px-3 py-1 rounded bg-slate-800 text-xs font-mono font-semibold text-slate-400 self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-indigo-400 font-semibold mb-4">
                <span>{exp.company}</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="text-slate-500 font-mono text-xs">{exp.location}</span>
              </div>

              <ul className="space-y-2.5 mt-4 text-slate-300 text-sm">
                {exp.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="space-y-6 pb-12">
        <div className="flex items-center gap-3 border-t border-slate-800 pt-10">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <GraduationCap size={18} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {resumePage.educationTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {resumePage.education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/50 border border-slate-800 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-indigo-400 mt-1">
                  {edu.institution}
                </p>
              </div>
              <span className="px-3 py-1 rounded bg-slate-800 text-xs font-mono font-semibold text-slate-400 self-start sm:self-auto">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
