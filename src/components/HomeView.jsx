import React from 'react';
import { BookOpen, FileCheck2, BarChart3, CheckCircle2, Sparkles, ShieldCheck, ArrowRight, Code2, Globe2, Layers, Cpu } from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData.js';

export default function HomeView({ setActiveTab, progress }) {
  const completedLessons = Object.keys(progress?.completedLessons || {}).filter(k => progress?.completedLessons[k]).length;
  const examScore = progress?.examResults?.score;
  const examTotal = progress?.examResults?.total || 66;
  const examPercentage = progress?.examResults?.percentage;

  return (
    <div className="space-y-6 pb-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border border-blue-900/50 rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Polytechnic University of the Philippines • CCIS
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Web Development Midterm Reviewer & 66-Item Exam
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
            Master <strong className="text-amber-400">HTML5 Semantic Web</strong>, <strong className="text-blue-400">CSS3 Responsive Layouts</strong>, and <strong className="text-purple-400">Modern PHP Foundations</strong> with bite-sized lessons, instant feedback, and randomized 60-item midterm theoretical exams.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActiveTab('exam')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all transform active:scale-95"
            >
              <FileCheck2 className="w-4 h-4" />
              Take 66-Item Theoretical Exam
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('lessons')}
              className="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm flex items-center gap-2 transition-all"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              Explore 11 Lessons
            </button>

            <button
              onClick={() => setActiveTab('progress')}
              className="px-4 py-3 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-sm flex items-center gap-2 transition-all"
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              Track Progress
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="text-xs text-slate-400 font-medium">Curriculum</div>
          <div className="text-2xl font-black text-white mt-1">11 <span className="text-xs text-slate-500">Lessons</span></div>
          <div className="text-xs text-blue-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {completedLessons} completed
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="text-xs text-slate-400 font-medium">Exam Format</div>
          <div className="text-2xl font-black text-amber-400 mt-1">60 <span className="text-xs text-slate-500">Items</span></div>
          <div className="text-xs text-slate-400 mt-1">56 MCQ + 10 Iden</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="text-xs text-slate-400 font-medium">Question Bank</div>
          <div className="text-2xl font-black text-cyan-400 mt-1">108+ <span className="text-xs text-slate-500">Pool</span></div>
          <div className="text-xs text-slate-400 mt-1">Auto-shuffled choices</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="text-xs text-slate-400 font-medium">Exam Record</div>
          <div className="text-2xl font-black text-emerald-400 mt-1">
            {examScore !== undefined ? `${examScore}/${examTotal}` : 'Not Taken'}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {examPercentage !== undefined ? `${examPercentage}% score` : 'Instant feedback'}
          </div>
        </div>
      </div>

      {/* Modules Roadmap */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            Midterm Course Modules
          </h2>
          <span className="text-xs text-slate-400">3 Comprehensive Units</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MODULES_DATA.map((module, idx) => (
            <div
              key={module.id}
              onClick={() => setActiveTab('lessons')}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-1 shadow-lg group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Unit 0{idx + 1}
                </span>
                <span className="text-xs text-slate-400">{module.lessons.length} Lessons</span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                {module.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                {module.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  Study Lessons <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="font-mono text-slate-400">
                  {module.lessons.filter(l => progress?.completedLessons?.[l.id]).length}/{module.lessons.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Midterm Theoretical Exam Highlight */}
      <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/5 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">Theoretical Examination</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              66-Item Master Reviewer (56 MCQ + 10 Identification)
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Instant feedback on every click, randomized question pool from 108+ items, shuffled answer choices (A, B, C, D), and separated wrong-answer analysis at completion.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('exam')}
            className="shrink-0 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
          >
            Start Exam Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
