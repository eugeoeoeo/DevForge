import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Award,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Search,
  Check,
  Layers,
  ArrowRight,
  ArrowLeft,
  ListOrdered
} from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData.js';
import { QUIZZES_DATA } from '../data/quizzesData.js';
import QuizModal from './QuizModal.jsx';
import { markLessonComplete, saveQuizResult } from '../utils/storage.js';

function FormattedLessonText({ text }) {
  if (!text) return null;

  const lines = text.split('\n');
  return (
    <div className="space-y-3 text-slate-300 leading-relaxed text-sm md:text-base">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-2" />;

        // Headers
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={idx} className="text-base md:text-lg font-bold text-amber-300 mt-4 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              {trimmed.replace('### ', '')}
            </h4>
          );
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h3 key={idx} className="text-lg md:text-xl font-extrabold text-blue-300 mt-5 mb-2 border-b border-blue-500/30 pb-1">
              {trimmed.replace('## ', '')}
            </h3>
          );
        }

        // Bullet lists
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const content = trimmed.substring(2);
          return (
            <div key={idx} className="flex items-start gap-2.5 ml-2 md:ml-4 text-slate-200">
              <span className="text-amber-400 font-bold mt-1 text-sm">•</span>
              <span className="flex-1">{renderBoldAndCode(content)}</span>
            </div>
          );
        }

        // Code block simulation
        if (trimmed.startsWith('```') || trimmed.endsWith('```')) {
          return null;
        }

        // Standard paragraph
        return <p key={idx}>{renderBoldAndCode(trimmed)}</p>;
      })}
    </div>
  );
}

function renderBoldAndCode(text) {
  // Regex parsing for bold **text** and inline code `code`
  const parts = [];
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  let lastIdx = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="font-bold text-white bg-amber-500/10 px-1 py-0.5 rounded border-b border-amber-400/40">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={match.index} className="font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-1.5 py-0.5 rounded text-xs md:text-sm">
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIdx = regex.lastIndex;
  }

  if (lastIdx < text.length) {
    parts.push(text.substring(lastIdx));
  }

  return parts;
}

export default function LessonViewer({ progress, onUpdateProgress }) {
  const [selectedModuleId, setSelectedModuleId] = useState(MODULES_DATA[0].id);
  const [selectedLessonId, setSelectedLessonId] = useState(MODULES_DATA[0].lessons[0].id);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [activeQuizLesson, setActiveQuizLesson] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const currentModule = MODULES_DATA.find((m) => m.id === selectedModuleId) || MODULES_DATA[0];
  const currentLesson = currentModule.lessons.find((l) => l.id === selectedLessonId) || currentModule.lessons[0];

  const sections = currentLesson.sections && currentLesson.sections.length > 0
    ? currentLesson.sections
    : [{ title: 'Full Lesson', content: currentLesson.content }];

  const currentSection = sections[currentSectionIndex] || sections[0];
  const isLessonCompleted = !!progress?.completedLessons?.[currentLesson.id];
  const quizInfo = QUIZZES_DATA[currentLesson.id];
  const quizScore = progress?.quizScores?.[currentLesson.id];

  const handleSelectLesson = (moduleId, lessonId) => {
    setSelectedModuleId(moduleId);
    setSelectedLessonId(lessonId);
    setCurrentSectionIndex(0);
    setMobileDrawerOpen(false);
  };

  const handleNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Mark lesson complete
      const updated = markLessonComplete(currentLesson.id);
      onUpdateProgress(updated);
    }
  };

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuizFinish = (result) => {
    const updated = saveQuizResult(currentLesson.id, result.score, result.total);
    onUpdateProgress(updated);
    setActiveQuizLesson(null);
  };

  return (
    <div className="space-y-4">
      {/* Mobile Lesson Selector Bar */}
      <div className="lg:hidden bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2 overflow-hidden">
          <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
          <div className="truncate">
            <div className="text-xs text-amber-400 font-semibold uppercase">{currentModule.title}</div>
            <div className="text-sm font-bold text-white truncate">{currentLesson.title}</div>
          </div>
        </div>
        <button
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="shrink-0 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
        >
          <Layers className="w-3.5 h-3.5" />
          {mobileDrawerOpen ? 'Close' : 'Lessons'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Navigation Sidebar */}
        <div
          className={`lg:col-span-4 space-y-4 ${
            mobileDrawerOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-sm sticky top-4">
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white text-base">Course Curriculum</h3>
              </div>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                11 Lessons
              </span>
            </div>

            {/* Quick Search */}
            <div className="relative mb-4">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Modules List */}
            <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
              {MODULES_DATA.map((module) => {
                const filteredLessons = module.lessons.filter((l) =>
                  l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  l.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
                );
                if (filteredLessons.length === 0) return null;

                return (
                  <div key={module.id} className="space-y-1.5">
                    <div className="text-xs font-black uppercase tracking-wider text-amber-400/90 px-2 py-1 flex items-center justify-between">
                      <span>{module.title}</span>
                      <span className="text-[10px] text-slate-400">
                        {module.lessons.filter((l) => progress?.completedLessons?.[l.id]).length}/{module.lessons.length}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {filteredLessons.map((lesson) => {
                        const isSelected = lesson.id === currentLesson.id;
                        const isDone = !!progress?.completedLessons?.[lesson.id];
                        const scoreObj = progress?.quizScores?.[lesson.id];

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => handleSelectLesson(module.id, lesson.id)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-start gap-2.5 text-xs md:text-sm ${
                              isSelected
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/20'
                                : 'bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-white'
                            }`}
                          >
                            <span className="mt-0.5 shrink-0">
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                  isSelected ? 'border-white text-white' : 'border-slate-600 text-slate-400'
                                }`}>
                                  {lesson.id.split('-')[1]}
                                </span>
                              )}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="truncate font-semibold">{lesson.title}</div>
                              <div className={`text-[11px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                                {lesson.subtitle}
                              </div>
                            </div>
                            {scoreObj && (
                              <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                                {scoreObj.score}/{scoreObj.total}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lesson Content Area */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-7 shadow-xl">
            {/* Header / Meta */}
            <div className="border-b border-slate-800 pb-4 mb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  {currentModule.title} • {currentLesson.category}
                </span>
                <div className="flex items-center gap-2">
                  {isLessonCompleted && (
                    <span className="text-xs flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
                      <Check className="w-3.5 h-3.5" /> Completed
                    </span>
                  )}
                  {quizScore && (
                    <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 font-mono">
                      Quiz: {quizScore.score}/{quizScore.total} ({quizScore.percentage}%)
                    </span>
                  )}
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-black text-white">{currentLesson.title}</h2>
              <p className="text-sm text-slate-400 mt-1">{currentLesson.subtitle}</p>
            </div>

            {/* Bite-Sized Pagination Bar ("Click to move to next part thingie") */}
            {sections.length > 1 && (
              <div className="mb-6 bg-slate-950/80 border border-slate-800 rounded-xl p-2.5">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 px-1">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <ListOrdered className="w-3.5 h-3.5 text-blue-400" />
                    Part {currentSectionIndex + 1} of {sections.length}: <span className="text-amber-300 font-bold">{currentSection.title}</span>
                  </span>
                  <span className="font-mono text-[11px] text-blue-400">
                    {Math.round(((currentSectionIndex + 1) / sections.length) * 100)}%
                  </span>
                </div>

                {/* Progress segmented dots/bars */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5">
                  {sections.map((sec, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSectionIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSectionIndex
                          ? 'bg-amber-400 ring-2 ring-amber-400/30'
                          : idx < currentSectionIndex
                          ? 'bg-emerald-500'
                          : 'bg-slate-800 hover:bg-slate-700'
                      }`}
                      title={sec.title}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Current Section Content with Bold Words & Formatted Text */}
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 md:p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-slate-800/80 pb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {currentSection.title}
              </h3>
              <FormattedLessonText text={currentSection.content} />
            </div>

            {/* Key Takeaways & Exam Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {currentLesson.takeaways && (
                <div className="bg-blue-950/30 border border-blue-900/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Lightbulb className="w-4 h-4" /> Key Takeaways
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    {currentLesson.takeaways.map((tip, idx) => (
                      <li key={idx}>{renderBoldAndCode(tip)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {currentLesson.examTips && (
                <div className="bg-amber-950/30 border border-amber-900/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Award className="w-4 h-4" /> Exam Pointers
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    {currentLesson.examTips.map((tip, idx) => (
                      <li key={idx}>{renderBoldAndCode(tip)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Navigation & Action Footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevSection}
                  disabled={currentSectionIndex === 0}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous Part
                </button>
                <button
                  onClick={handleNextSection}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all"
                >
                  {currentSectionIndex < sections.length - 1 ? (
                    <>Next Part <ChevronRight className="w-4 h-4" /></>
                  ) : (
                    <>Complete Lesson <Check className="w-4 h-4" /></>
                  )}
                </button>
              </div>

              {quizInfo && (
                <button
                  onClick={() => setActiveQuizLesson(currentLesson.id)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
                >
                  <HelpCircle className="w-4 h-4" />
                  {quizScore ? 'Retake Lesson Quiz' : 'Take Lesson Quiz'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      {activeQuizLesson && QUIZZES_DATA[activeQuizLesson] && (
        <QuizModal
          lessonTitle={currentLesson.title}
          lessonId={activeQuizLesson}
          questions={QUIZZES_DATA[activeQuizLesson]}
          onComplete={handleQuizFinish}
          onClose={() => setActiveQuizLesson(null)}
        />
      )}
    </div>
  );
}
