import React from 'react';
import { Award, CheckCircle2, RotateCcw, BookOpen, FileCheck2, TrendingUp, AlertTriangle, Globe2, Brain } from 'lucide-react';
import { COURSES } from '../data/courses.js';
import { MODULES_DATA } from '../data/modulesData.js';
import { saveUserProgress, clearActiveExamSession } from '../utils/storage.js';

export default function ProgressDashboard({ progress, onUpdateProgress, activeCourse, onSwitchCourse, setActiveTab }) {
  const currentCourse = COURSES[activeCourse] || COURSES.webdev;
  const courseData = progress?.courses?.[activeCourse] || {};
  const exam = courseData.examResults;

  const totalLessons = currentCourse.totalLessons || 0;
  const completedLessons = Object.keys(courseData.completedLessons || {}).filter(k => courseData.completedLessons[k]).length;
  const lessonPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 100;
  const examPct = exam ? exam.percentage : 0;

  const handleResetCourse = () => {
    if (window.confirm(`Are you sure you want to reset all exam and quiz records for ${currentCourse.title}?`)) {
      const updated = {
        ...progress,
        courses: {
          ...progress.courses,
          [activeCourse]: {
            completedLessons: {},
            quizScores: {},
            examResults: null
          }
        }
      };
      saveUserProgress(updated);
      clearActiveExamSession(activeCourse);
      onUpdateProgress(updated);
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Subject Selector Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div className="text-xs font-bold text-white flex items-center gap-2">
          <span>Viewing Progress for:</span>
          <span className="text-amber-400 font-extrabold">{currentCourse.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSwitchCourse('webdev')}
            className={`px-3 py-1 rounded-xl text-xs font-semibold ${activeCourse === 'webdev' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            Web Dev
          </button>
          <button
            onClick={() => onSwitchCourse('electives')}
            className={`px-3 py-1 rounded-xl text-xs font-semibold ${activeCourse === 'electives' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            Machine Learning
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Student Dashboard</div>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">{currentCourse.title} Readiness</h2>
            <p className="text-xs text-slate-400 mt-1">Review your exam performance and readiness analytics.</p>
          </div>
          <button
            onClick={handleResetCourse}
            className="px-3 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-800/60 text-red-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset {currentCourse.title}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Lessons (if applicable) */}
          {currentCourse.hasLessons ? (
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-400" /> Lessons Completed
                </span>
                <span className="font-mono text-blue-400 font-bold">{lessonPct}%</span>
              </div>
              <div className="text-2xl font-black text-white">
                {completedLessons} <span className="text-sm font-normal text-slate-500">/ {totalLessons}</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
                <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${lessonPct}%` }} />
              </div>
            </div>
          ) : (
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
              <div className="text-xs text-slate-400 mb-2 flex items-center gap-1.5 font-semibold text-slate-300">
                <Brain className="w-4 h-4 text-emerald-400" /> Course Format
              </div>
              <div className="text-xl font-black text-emerald-400">Strict Exam Only</div>
              <div className="text-xs text-slate-400 mt-2">70 MCQs + 10 Identification items</div>
            </div>
          )}

          {/* Exam Result */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-amber-400" /> Exam Score
              </span>
              <span className="font-mono text-amber-400 font-bold">
                {exam ? `${exam.percentage}%` : '0%'}
              </span>
            </div>
            <div className="text-2xl font-black text-white">
              {exam ? (
                <>
                  {exam.score} <span className="text-sm font-normal text-slate-500">/ {exam.total}</span>
                </>
              ) : (
                <span className="text-base text-slate-500">Not Taken Yet</span>
              )}
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
              <div
                className={`h-full transition-all duration-500 ${
                  (exam?.percentage || 0) >= 70 ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${exam?.percentage || 0}%` }}
              />
            </div>
          </div>

          {/* Overall Readiness */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> Overall Readiness
              </span>
              <span className="font-mono text-emerald-400 font-bold">
                {exam ? exam.percentage : 0}%
              </span>
            </div>
            <div className="text-xl font-black text-white">
              {(exam?.percentage || 0) >= 70 ? (
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-5 h-5" /> Midterm Ready
                </span>
              ) : (
                <span className="text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-5 h-5" /> Needs Practice
                </span>
              )}
            </div>
            <div className="text-xs text-slate-400 mt-2">
              {exam ? `Completed with ${exam.percentage}% accuracy` : 'Take exam to assess readiness'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
