import React from 'react';
import { BookOpen, FileCheck2, BarChart3, CheckCircle2, Sparkles, ShieldCheck, ArrowRight, Globe2, Brain, Layers, RefreshCw } from 'lucide-react';
import { COURSES } from '../data/courses.js';
import { MODULES_DATA } from '../data/modulesData.js';

export default function HomeView({ setActiveTab, activeCourse, onSwitchCourse, progress }) {
  const currentCourse = COURSES[activeCourse] || COURSES.webdev;
  const courseData = progress?.courses?.[activeCourse] || {};
  const completedLessons = Object.keys(courseData.completedLessons || {}).filter(k => courseData.completedLessons[k]).length;
  const examScore = courseData.examResults?.score;
  const examTotal = courseData.examResults?.total || currentCourse.examTotal;
  const examPercentage = courseData.examResults?.percentage;

  return (
    <div className="space-y-6 pb-6">
      {/* Course Switcher Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-semibold">Active Subject:</span>
          <span className="text-xs font-bold text-white bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1.5">
            {activeCourse === 'webdev' ? <Globe2 className="w-3.5 h-3.5 text-blue-400" /> : <Brain className="w-3.5 h-3.5 text-emerald-400" />}
            {currentCourse.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSwitchCourse('webdev')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCourse === 'webdev'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            Web Development
          </button>
          <button
            onClick={() => onSwitchCourse('electives')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCourse === 'electives'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            Applied Machine Learning (Elective)
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${activeCourse === 'webdev' ? 'from-blue-950 via-slate-900 to-indigo-950 border-blue-900/50' : 'from-emerald-950 via-slate-900 to-teal-950 border-emerald-900/50'} border rounded-3xl p-6 md:p-8 shadow-2xl`}>
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            PUP CCIS Midterm Reviewer • {currentCourse.code}
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
            {currentCourse.title} Midterm Examination Reviewer
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
            {activeCourse === 'webdev'
              ? 'Master HTML5 Semantic Web, CSS3 Responsive Layouts, and Modern PHP Foundations with 66 official exam questions and bite-sized lessons.'
              : 'Review Machine Learning Workflow, Datasets, Image Classification (CNNs, Augmentation), Audio Classification (Spectrograms, ZCR), and Model Evaluation metrics.'}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActiveTab('exam')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all transform active:scale-95"
            >
              <FileCheck2 className="w-4 h-4" />
              Take {currentCourse.examTotal}-Item Theoretical Exam
              <ArrowRight className="w-4 h-4" />
            </button>

            {currentCourse.hasLessons && (
              <button
                onClick={() => setActiveTab('lessons')}
                className="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm flex items-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                Explore 11 Lessons
              </button>
            )}

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
          <div className="text-xs text-slate-400 font-medium">Exam Scope</div>
          <div className="text-2xl font-black text-white mt-1">
            {currentCourse.examTotal} <span className="text-xs text-slate-500">Items</span>
          </div>
          <div className="text-xs text-amber-400 mt-1">
            {currentCourse.mcqCount} MCQ + {currentCourse.idCount} ID
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="text-xs text-slate-400 font-medium">Question Pool</div>
          <div className="text-2xl font-black text-cyan-400 mt-1">Strict Official</div>
          <div className="text-xs text-slate-400 mt-1">No extra fluff</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="text-xs text-slate-400 font-medium">Option Shuffling</div>
          <div className="text-2xl font-black text-purple-400 mt-1">Dynamic</div>
          <div className="text-xs text-slate-400 mt-1">A, B, C, D randomized</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="text-xs text-slate-400 font-medium">Best Score</div>
          <div className="text-2xl font-black text-emerald-400 mt-1">
            {examScore !== undefined ? `${examScore}/${examTotal}` : 'Not Taken'}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {examPercentage !== undefined ? `${examPercentage}% score` : 'Instant feedback'}
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      {activeCourse === 'webdev' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              Web Development Course Modules
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
                    {module.lessons.filter(l => courseData.completedLessons?.[l.id]).length}/{module.lessons.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-emerald-400" />
              Machine Learning Exam Scope (Official Questions)
            </h2>
            <span className="text-xs text-emerald-400 font-mono">80 Total Items</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Part 1 & 2 • ML Fundamentals</div>
              <h3 className="text-base font-bold text-white">Workflows, Datasets & Model Training</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Covers data splits (Train, Validation, Test), data cleaning & outliers, exploratory data analysis (EDA), early stopping, learning rate, epochs, overfitting vs underfitting, and loss curves.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">Part 3 & 4 • Vision & Audio</div>
              <h3 className="text-base font-bold text-white">Image & Audio Classification</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Covers CNN architectures, data augmentation, multilabel vs multiclass, confusion matrix (TP, FP, FN, TN), F1-Score (68.6%), audio waveforms, spectrograms, Zero-Crossing Rate (ZCR), and API endpoints.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Exam CTA Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/5 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">Strict Theoretical Examination</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {currentCourse.title}: {currentCourse.examTotal}-Item Official Examination
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Strictly based on your curriculum items with instant feedback on every click, shuffled options (A,B,C,D), and separated mistake review.
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
