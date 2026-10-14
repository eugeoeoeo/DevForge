import React from 'react';
import { BookOpen, Award, CheckCircle2, Layout, FileText, BarChart3, Globe2, Brain, Sparkles, RefreshCw } from 'lucide-react';
import { COURSES } from '../data/courses.js';

export default function Header({ activeTab, setActiveTab, activeCourse, onSwitchCourse, progress }) {
  const currentCourse = COURSES[activeCourse] || COURSES.webdev;
  const courseData = progress?.courses?.[activeCourse] || {};
  const completedLessons = Object.keys(courseData.completedLessons || {}).filter(k => courseData.completedLessons[k]).length;
  const examScore = courseData.examResults?.score;

  return (
    <header className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-3 sm:px-4 py-2.5">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Brand */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${currentCourse.themeColor} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
            {activeCourse === 'webdev' ? <Globe2 className="w-5 h-5" /> : <Brain className="w-5 h-5 text-emerald-300" />}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">PUP CCIS Midterms</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-blue-500/20 text-blue-300 font-mono rounded font-semibold">
                {currentCourse.code}
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-extrabold text-white leading-tight">
              {currentCourse.title}
            </h1>
          </div>
        </div>

        {/* Subject Switcher Button */}
        <div className="flex items-center bg-slate-900 border border-slate-800 p-0.5 rounded-xl shadow-inner">
          <button
            onClick={() => onSwitchCourse('webdev')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCourse === 'webdev'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Switch to Web Development"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Web Dev</span>
          </button>

          <button
            onClick={() => onSwitchCourse('electives')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCourse === 'electives'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Switch to Machine Learning Elective"
          >
            <Brain className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">AI / ML Elective</span>
          </button>
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

          {currentCourse.hasLessons && (
            <button
              onClick={() => setActiveTab('lessons')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'lessons'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Lessons ({completedLessons}/{currentCourse.totalLessons})
            </button>
          )}

          <button
            onClick={() => setActiveTab('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'exam'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Exam ({currentCourse.examTotal} Items)
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
            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-lg text-[11px] text-amber-300 font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>{examScore}/{currentCourse.examTotal}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
