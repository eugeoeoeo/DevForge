import React from 'react';
import { BookOpen, Award, CheckCircle2, Layout, FileText, BarChart3, Globe2 } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, progress }) {
  const completedLessons = Object.keys(progress?.completedLessons || {}).filter(k => progress.completedLessons[k]).length;
  const examScore = progress?.examResults?.score;

  return (
    <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <Globe2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">PUP CCIS Midterms</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-blue-500/20 text-blue-300 font-mono rounded">WebDev</span>
            </div>
            <h1 className="text-sm md:text-base font-extrabold text-white leading-tight">
              Web Development Reviewer
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'home'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            Home
          </button>

          <button
            onClick={() => setActiveTab('lessons')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'lessons'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Lessons ({completedLessons}/11)
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'exam'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Midterm Exam (66 Items)
          </button>

          <button
            onClick={() => setActiveTab('progress')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'progress'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Analytics
          </button>
        </nav>

        {/* Quick Badges */}
        <div className="flex items-center gap-2">
          {examScore !== undefined && (
            <div className="hidden sm:flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg text-xs text-amber-300 font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Exam: {examScore}/66</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-lg text-xs text-blue-300 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{completedLessons}/11 Done</span>
          </div>
        </div>
      </div>
    </header>
  );
}
