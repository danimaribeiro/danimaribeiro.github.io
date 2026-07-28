import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Play, Mail, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Content } from '../data/content';
import { WaveBackground } from '../components/WaveBackground';
import { ConstellationBackground } from '../components/ConstellationBackground';

interface HomeProps {
  content: Content;
  onNavigateToResume: () => void;
}

export const Home: React.FC<HomeProps> = ({ content, onNavigateToResume }) => {
  const { hero, projects, talksAndVideos, contact } = content;

  return (
    <div className="w-full pb-8">
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center min-h-[calc(100vh-72px)] py-4">
        <WaveBackground />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full"
        >
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200">
            {hero.title}
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-slate-300 max-w-3xl leading-snug">
            {hero.role}
          </p>

          <p className="text-sm text-slate-500 font-mono">
            {hero.location}
          </p>

            <div className="text-base sm:text-lg text-slate-400 space-y-4 max-w-3xl leading-relaxed relative z-10">
              {hero.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 relative z-10">
            <button
              onClick={onNavigateToResume}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{hero.ctaResume}</span>
              <ArrowRight size={17} />
            </button>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              <Mail size={17} className="text-emerald-400" />
              <span>{hero.ctaCollaborate}</span>
            </a>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="relative w-full pt-16">
        <ConstellationBackground />
        
        {/* FEATURED PROJECTS */}
        <section className="space-y-8 relative z-10">
          <div className="border-t border-slate-800/80 pt-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {projects.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            {projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.items.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/90 mt-1">
                      {proj.subtitle}
                    </p>
                  </div>
                  {proj.stats && (
                    <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono font-semibold text-slate-300 whitespace-nowrap">
                      {proj.stats}
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-indigo-300 text-xs font-mono font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-5">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Github size={15} />
                    <span>Source & Docs</span>
                  </a>
                )}
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink size={15} />
                    <span>Live / Ecosystem</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TALKS & VIDEOS */}
      <section className="space-y-6 relative z-10">
        <div className="border-t border-slate-800/80 pt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {talksAndVideos.title}
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              {talksAndVideos.subtitle}
            </p>
          </div>
          <a
            href={talksAndVideos.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap"
          >
            <span>{talksAndVideos.channelLinkText}</span>
          </a>
        </div>

        <div className="space-y-3">
          {talksAndVideos.items.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:translate-x-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  <Play size={18} className="fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {item.event}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 sm:text-right mt-2 sm:mt-0">
                {item.date}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="border-t border-slate-800/80 pt-16 pb-8 text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {contact.title}
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/60 text-slate-200 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <Github size={16} className="text-emerald-400" />
            <span>GitHub</span>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/60 text-slate-200 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <Linkedin size={16} className="text-emerald-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/60 text-slate-200 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <Mail size={16} className="text-emerald-400" />
            <span>E-mail</span>
          </a>

          <a
            href={contact.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/60 text-slate-200 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <Youtube size={16} className="text-emerald-400" />
            <span>YouTube</span>
          </a>
        </div>

        <p className="text-xs text-slate-600 font-mono pt-8">
          {contact.copyright}
        </p>
      </footer>
      </div>
    </div>
  );
};
