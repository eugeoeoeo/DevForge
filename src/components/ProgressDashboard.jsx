import React from 'react';
import { Award, CheckCircle2, RotateCcw, BookOpen, FileCheck2, TrendingUp, AlertTriangle } from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData.js';
import { getOverallProgress, saveUserProgress, clearActiveExamSession } from '../utils/storage.js';

export default function ProgressDashboard({ progress, onUpdateProgress, setActiveTab }) {
  const stats = getOverallProgress(progress);
  const exam = progress?.examResults;

  const handleResetAll = () => {
    if (window.confirm('Are you sure you want to reset all your progress, quizzes, and exam results?')) {
      const reset = {
        profile: progress?.profile || {},
        completedLessons: {},
        quizScores: {},
        examResults: null
      };
      saveUserProgress(reset);
      clearActiveExamSession();
      onUpdateProgress(reset);
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Overview Cards */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Student Dashboard</div>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">Midterm Readiness & Mastery</h2>
            <p className="text-xs text-slate-400 mt-1">Review your lesson progress and theoretical examination results.</p>
          </div>
          <button
            onClick={handleResetAll}
            className="px-3 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-800/60 text-red-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset All Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Lessons Progress */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-400" /> Lessons Completed
              </span>
              <span className="font-mono text-blue-400 font-bold">{stats.lessonPercentage}%</span>
            </div>
            <div className="text-2xl font-black text-white">
              {stats.completedLessonsCount} <span className="text-sm font-normal text-slate-500">/ {stats.totalLessons}</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
              <div
                className="bg-blue-500 h-full transition-all duration-500"
                style={{ width: `${stats.lessonPercentage}%` }}
              />
            </div>
          </div>

          {/* Exam Result */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-amber-400" /> 60-Item Exam Score
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
                {Math.round((stats.lessonPercentage + (exam?.percentage || 0)) / 2)}%
              </span>
            </div>
            <div className="text-xl font-black text-white">
              {(exam?.percentage || 0) >= 70 ? (
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-5 h-5" /> Midterm Ready
                </span>
              ) : (
                <span className="text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-5 h-5" /> In Progress
                </span>
              )}
            </div>
            <div className="text-xs text-slate-400 mt-2">
              {stats.completedLessonsCount === stats.totalLessons
                ? 'All lessons reviewed. Ready for exam!'
                : `${stats.totalLessons - stats.completedLessonsCount} lessons remaining`}
            </div>
          </div>
        </div>
      </div>

      {/* Module by Module Breakdown */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-400" />
          Unit Progress Breakdown
        </h3>

        <div className="space-y-3">
          {MODULES_DATA.map((module) => {
            const completedCount = module.lessons.filter(l => progress?.completedLessons?.[l.id]).length;
            const pct = Math.round((completedCount / module.lessons.length) * 100);

            return (
              <div key={module.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{module.title}</h4>
                    <p className="text-xs text-slate-400">{module.lessons.length} Lessons</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                    {completedCount}/{module.lessons.length} ({pct}%)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  {module.lessons.map((lesson) => {
                    const isDone = !!progress?.completedLessons?.[lesson.id];
                    const qScore = progress?.quizScores?.[lesson.id];

                    return (
                      <div
                        key={lesson.id}
                        onClick={() => setActiveTab('lessons')}
                        className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                          isDone
                            ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200'
                            : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-slate-500">{lesson.id}</span>
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-slate-700" />
                          )}
                        </div>
                        <div className="font-semibold truncate text-white mt-1">{lesson.title}</div>
                        {qScore && (
                          <div className="text-[10px] text-cyan-400 font-mono mt-1">
                            Quiz: {qScore.score}/{qScore.total}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
