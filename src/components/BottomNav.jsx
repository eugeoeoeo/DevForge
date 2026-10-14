import React from 'react';
import { Home, BookOpen, FileCheck2, BarChart3, Brain, Globe2 } from 'lucide-react';
import { COURSES } from '../data/courses.js';

export default function BottomNav({ activeTab, setActiveTab, activeCourse, onSwitchCourse }) {
  const currentCourse = COURSES[activeCourse] || COURSES.webdev;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-2 py-1 pb-[max(0.4rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center justify-around">
        <button
          onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'home' ? 'text-amber-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] mt-0.5">Home</span>
        </button>

        {currentCourse.hasLessons && (
          <button
            onClick={() => { setActiveTab('lessons'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              activeTab === 'lessons' ? 'text-amber-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Lessons</span>
          </button>
        )}

        <button
          onClick={() => { setActiveTab('exam'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'exam' ? 'text-amber-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileCheck2 className="w-4 h-4" />
          <span className="text-[10px] mt-0.5">Exam ({currentCourse.examTotal})</span>
        </button>

        <button
          onClick={() => { setActiveTab('progress'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'progress' ? 'text-amber-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span className="text-[10px] mt-0.5">Progress</span>
        </button>

        {/* Quick Subject Toggle */}
        <button
          onClick={() => onSwitchCourse(activeCourse === 'webdev' ? 'electives' : 'webdev')}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-cyan-400 hover:text-cyan-300 transition-all border border-cyan-800/40 bg-cyan-950/30"
          title="Switch Subject"
        >
          {activeCourse === 'webdev' ? <Brain className="w-4 h-4 text-emerald-400" /> : <Globe2 className="w-4 h-4 text-blue-400" />}
          <span className="text-[9px] mt-0.5 font-bold">Switch</span>
        </button>
      </div>
    </nav>
  );
}
