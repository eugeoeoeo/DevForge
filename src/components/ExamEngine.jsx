import React, { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Flag,
  Award,
  RotateCcw,
  AlertTriangle,
  Filter,
  Check,
  X,
  Send,
  ChevronLeft,
  ChevronRight,
  Grid,
  Layers,
  Sparkles,
  HelpCircle,
  Brain,
  Globe2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateExamSession } from '../utils/examSampler.js';
import {
  saveExamAttempt,
  loadActiveExamSession,
  saveActiveExamSession,
  clearActiveExamSession
} from '../utils/storage.js';
import { COURSES } from '../data/courses.js';

export default function ExamEngine({ activeCourse = 'webdev', onExamComplete, onUpdateProgress, progress }) {
  const currentCourse = COURSES[activeCourse] || COURSES.webdev;

  // Initialize Active Exam from LocalStorage or generate fresh
  const [activeExam, setActiveExam] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (
        saved &&
        saved.activeExam &&
        Array.isArray(saved.activeExam.mcq) &&
        saved.activeExam.mcq.length > 0 &&
        saved.activeExam.courseId === activeCourse
      ) {
        return saved.activeExam;
      }
    } catch (e) {
      console.error('Failed loading saved session', e);
    }
    return generateExamSession(activeCourse);
  });

  const [examPart, setExamPart] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && saved?.examPart) {
        return saved.examPart;
      }
    } catch (e) {}
    return 'mcq'; // 'mcq' | 'id'
  });

  const [currentMcqIndex, setCurrentMcqIndex] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && typeof saved?.currentMcqIndex === 'number') {
        return saved.currentMcqIndex;
      }
    } catch (e) {}
    return 0;
  });

  const [currentIdIndex, setCurrentIdIndex] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && typeof saved?.currentIdIndex === 'number') {
        return saved.currentIdIndex;
      }
    } catch (e) {}
    return 0;
  });

  const [showJumpDrawer, setShowJumpDrawer] = useState(false);

  // User responses & evaluation state
  const [mcqAnswers, setMcqAnswers] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && saved?.mcqAnswers) {
        return saved.mcqAnswers;
      }
    } catch (e) {}
    return {};
  });

  const [idAnswers, setIdAnswers] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && saved?.idAnswers) {
        return saved.idAnswers;
      }
    } catch (e) {}
    return {};
  });

  const [idEvaluated, setIdEvaluated] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && saved?.idEvaluated) {
        return saved.idEvaluated;
      }
    } catch (e) {}
    return {};
  });

  const [flagged, setFlagged] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && saved?.flagged) {
        return saved.flagged;
      }
    } catch (e) {}
    return {};
  });

  // Timer: 60 minutes
  const [secondsLeft, setSecondsLeft] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && typeof saved?.secondsLeft === 'number') {
        return saved.secondsLeft;
      }
    } catch (e) {}
    return 60 * 60;
  });

  const [isTimerRunning, setIsTimerRunning] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && saved?.isSubmitted) {
        return false;
      }
    } catch (e) {}
    return true;
  });

  // Submission & Results State
  const [isSubmitted, setIsSubmitted] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && saved?.isSubmitted) {
        return true;
      }
    } catch (e) {}
    return false;
  });

  const [resultSummary, setResultSummary] = useState(() => {
    try {
      const saved = loadActiveExamSession(activeCourse);
      if (saved?.activeExam?.courseId === activeCourse && saved?.resultSummary) {
        return saved.resultSummary;
      }
    } catch (e) {}
    return null;
  });

  const [confirmSubmitModal, setConfirmSubmitModal] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all' | 'wrong' | 'correct' | 'flagged'

  const totalMcqs = activeExam?.mcq?.length || currentCourse.mcqCount || 56;
  const totalIds = activeExam?.identification?.length || currentCourse.idCount || 10;
  const totalQuestions = totalMcqs + totalIds;

  const currentMcq = activeExam?.mcq?.[currentMcqIndex] || activeExam?.mcq?.[0] || { id: 'm0', question: '', options: [], number: 1, correctAnswer: 0 };
  const currentId = activeExam?.identification?.[currentIdIndex] || activeExam?.identification?.[0] || { id: 'i0', question: '', acceptableAnswers: [], number: totalMcqs + 1 };

  // Persist exam session to LocalStorage on state updates
  useEffect(() => {
    try {
      const sessionState = {
        activeExam,
        examPart,
        currentMcqIndex,
        currentIdIndex,
        mcqAnswers,
        idAnswers,
        idEvaluated,
        flagged,
        secondsLeft,
        isSubmitted,
        resultSummary
      };
      saveActiveExamSession(sessionState, activeCourse);
    } catch (e) {
      console.error('Failed to auto-save session:', e);
    }
  }, [
    activeExam,
    examPart,
    currentMcqIndex,
    currentIdIndex,
    mcqAnswers,
    idAnswers,
    idEvaluated,
    flagged,
    secondsLeft,
    isSubmitted,
    resultSummary,
    activeCourse
  ]);

  // Countdown timer
  useEffect(() => {
    if (!isTimerRunning || isSubmitted) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, isSubmitted]);

  // Trigger celebration on high score
  useEffect(() => {
    if (isSubmitted && resultSummary && resultSummary.percentage >= 75) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  }, [isSubmitted, resultSummary]);

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // MCQ Selection handler (Instant Feedback)
  const handleSelectMcqOption = (optIdx) => {
    if (isSubmitted) return;
    if (mcqAnswers[currentMcqIndex] !== undefined) return; // Prevent changing once answered

    setMcqAnswers((prev) => ({
      ...prev,
      [currentMcqIndex]: optIdx
    }));
  };

  // Identification Submit handler (Instant Feedback)
  const handleSubmitIdAnswer = (qIdx) => {
    if (isSubmitted) return;
    if (idEvaluated[qIdx]) return; // Already evaluated

    const userRaw = (idAnswers[qIdx] || '').trim().toLowerCase();
    const targetQ = activeExam.identification[qIdx];
    const acceptable = targetQ.acceptableAnswers.map((a) => a.trim().toLowerCase());

    const isMatch = acceptable.some((ans) => {
      if (userRaw === ans) return true;
      if (userRaw.length > 2 && ans.length > 2) {
        if (userRaw.includes(ans) || ans.includes(userRaw)) return true;
      }
      return false;
    });

    setIdEvaluated((prev) => ({
      ...prev,
      [qIdx]: {
        isCorrect: isMatch,
        revealed: true
      }
    }));
  };

  const handleToggleFlag = (type, idx) => {
    const key = `${type}_${idx}`;
    setFlagged((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Submit Final Exam
  const handleSubmitExam = () => {
    let mcqScore = 0;
    activeExam.mcq.forEach((q, idx) => {
      if (mcqAnswers[idx] === q.correctAnswer) {
        mcqScore++;
      }
    });

    let idScore = 0;
    activeExam.identification.forEach((q, idx) => {
      if (idEvaluated[idx]?.isCorrect) {
        idScore++;
      } else {
        const userRaw = (idAnswers[idx] || '').trim().toLowerCase();
        const acceptable = q.acceptableAnswers.map((a) => a.trim().toLowerCase());
        const isMatch = acceptable.some((ans) => {
          if (userRaw === ans) return true;
          if (userRaw.length > 2 && ans.length > 2) {
            if (userRaw.includes(ans) || ans.includes(userRaw)) return true;
          }
          return false;
        });
        if (isMatch) idScore++;
      }
    });

    const totalPossible = totalQuestions;
    const totalScore = mcqScore + idScore;
    const percentage = Math.round((totalScore / totalPossible) * 100);

    const summary = {
      courseId: activeCourse,
      totalScore,
      totalQuestions: totalPossible,
      percentage,
      mcqScore,
      totalMcqs,
      idScore,
      totalIds,
      passed: percentage >= 70,
      submittedDate: new Date().toISOString(),
      timeSpentSec: 60 * 60 - secondsLeft
    };

    setResultSummary(summary);
    setIsSubmitted(true);
    setIsTimerRunning(false);
    setConfirmSubmitModal(false);

    try {
      saveExamAttempt(summary, activeCourse);
      if (onExamComplete) onExamComplete(summary);
    } catch (e) {
      console.error('Error saving exam attempt:', e);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake Examination: Generates fresh random session from pool
  const handleRetakeExam = () => {
    if (!window.confirm(`Start a fresh ${currentCourse.title} examination? Your previous score is saved in analytics.`)) return;

    clearActiveExamSession(activeCourse);
    const freshSession = generateExamSession(activeCourse);
    setActiveExam(freshSession);
    setExamPart('mcq');
    setCurrentMcqIndex(0);
    setCurrentIdIndex(0);
    setMcqAnswers({});
    setIdAnswers({});
    setIdEvaluated({});
    setFlagged({});
    setSecondsLeft(60 * 60);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setResultSummary(null);
    setReviewFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const answeredMcqCount = Object.keys(mcqAnswers).length;
  const answeredIdCount = Object.keys(idEvaluated).length;
  const totalAnswered = answeredMcqCount + answeredIdCount;

  // -------------------------------------------------------------
  // RESULTS SCREEN
  // -------------------------------------------------------------
  if (isSubmitted && resultSummary) {
    const filteredMcqList = activeExam.mcq.map((q, idx) => {
      const studentAns = mcqAnswers[idx];
      const isCorrect = studentAns === q.correctAnswer;
      const isAnswered = studentAns !== undefined;
      const isFlag = !!flagged[`mcq_${idx}`];
      return { ...q, index: idx, type: 'mcq', studentAns, isCorrect, isAnswered, isFlag };
    }).filter((item) => {
      if (reviewFilter === 'wrong') return !item.isCorrect;
      if (reviewFilter === 'correct') return item.isCorrect;
      if (reviewFilter === 'flagged') return item.isFlag;
      return true;
    });

    const filteredIdList = activeExam.identification.map((q, idx) => {
      const evalObj = idEvaluated[idx];
      const isCorrect = !!evalObj?.isCorrect;
      const isFlag = !!flagged[`id_${idx}`];
      const studentAns = idAnswers[idx] || '';
      return { ...q, index: idx, type: 'id', studentAns, isCorrect, isFlag };
    }).filter((item) => {
      if (reviewFilter === 'wrong') return !item.isCorrect;
      if (reviewFilter === 'correct') return item.isCorrect;
      if (reviewFilter === 'flagged') return item.isFlag;
      return true;
    });

    const wrongTotal = totalQuestions - resultSummary.totalScore;

    return (
      <div className="space-y-6 pb-12">
        {/* Hero Score Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Award className="w-4 h-4" />
            {currentCourse.title} Examination Result
          </div>

          <div className="text-4xl md:text-6xl font-black text-white mt-1">
            {resultSummary.totalScore} <span className="text-xl md:text-3xl text-slate-500 font-bold">/ {resultSummary.totalQuestions}</span>
          </div>

          <div className="text-lg md:text-xl font-bold mt-2" style={{ color: resultSummary.passed ? '#34d399' : '#f87171' }}>
            {resultSummary.percentage}% • {resultSummary.passed ? 'PASSED (Midterm Ready!)' : 'NEEDS PRACTICE'}
          </div>

          {/* Sub Score Breakdown */}
          <div className="grid grid-cols-2 max-w-md mx-auto gap-3 mt-6 pt-6 border-t border-slate-800">
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">PART 1: MCQ ({totalMcqs})</div>
              <div className="text-xl font-black text-blue-400 mt-1">{resultSummary.mcqScore} / {totalMcqs}</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                {Math.round((resultSummary.mcqScore / totalMcqs) * 100)}% accuracy
              </div>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">PART 2: ID ({totalIds})</div>
              <div className="text-xl font-black text-emerald-400 mt-1">{resultSummary.idScore} / {totalIds}</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                {Math.round((resultSummary.idScore / totalIds) * 100)}% accuracy
              </div>
            </div>
          </div>

          {/* Retake Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleRetakeExam}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all transform active:scale-95"
            >
              <RotateCcw className="w-4 h-4" /> Retake Examination (New Randomized Session)
            </button>
          </div>
        </div>

        {/* Filter Tabs for Targeted Mistake Review */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Review Filter:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setReviewFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                reviewFilter === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              All ({totalQuestions})
            </button>
            <button
              onClick={() => setReviewFilter('wrong')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                reviewFilter === 'wrong' ? 'bg-red-600 text-white shadow-md' : 'bg-red-950/40 border border-red-900/50 hover:bg-red-900/40 text-red-300'
              }`}
            >
              <X className="w-3.5 h-3.5" /> ✕ Wrong Answers ({wrongTotal})
            </button>
            <button
              onClick={() => setReviewFilter('correct')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                reviewFilter === 'correct' ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-950/40 border border-emerald-900/50 hover:bg-emerald-900/40 text-emerald-300'
              }`}
            >
              <Check className="w-3.5 h-3.5" /> ✓ Correct Answers ({resultSummary.totalScore})
            </button>
          </div>
        </div>

        {/* Detailed Question Review Cards */}
        <div className="space-y-4">
          {filteredMcqList.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Part 1: Multiple Choice ({filteredMcqList.length} items shown)
              </h3>

              {filteredMcqList.map((q) => (
                <div
                  key={q.id}
                  className={`border rounded-2xl p-5 shadow-lg space-y-3 transition-all ${
                    q.isCorrect ? 'bg-slate-900/90 border-slate-800' : 'bg-red-950/20 border-red-900/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-mono font-bold text-slate-400">Question {q.number} of {totalQuestions}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                      q.isCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {q.isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      {q.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  <h4 className="text-sm md:text-base font-bold text-white leading-relaxed">{q.question}</h4>

                  <div className="space-y-2 pt-2">
                    {q.options.map((opt, optIdx) => {
                      const isChosen = q.studentAns === optIdx;
                      const isActualCorrect = q.correctAnswer === optIdx;

                      let rowStyle = 'bg-slate-950/50 border-slate-800 text-slate-300';
                      if (isActualCorrect) {
                        rowStyle = 'bg-emerald-950/40 border-emerald-600/60 text-emerald-200 font-semibold';
                      } else if (isChosen && !isActualCorrect) {
                        rowStyle = 'bg-red-950/40 border-red-600/60 text-red-200 font-semibold';
                      }

                      return (
                        <div key={optIdx} className={`p-3 rounded-xl border text-xs md:text-sm flex items-center justify-between gap-2 ${rowStyle}`}>
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono font-bold text-xs opacity-75">{String.fromCharCode(65 + optIdx)}.</span>
                            <span>{opt}</span>
                          </div>
                          {isActualCorrect && <span className="text-xs text-emerald-400 font-bold shrink-0">✓ Correct Answer</span>}
                          {isChosen && !isActualCorrect && <span className="text-xs text-red-400 font-bold shrink-0">✕ Your Choice</span>}
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div className="mt-3 bg-blue-950/30 border border-blue-900/50 rounded-xl p-3.5 text-xs text-blue-200 leading-relaxed">
                      <strong className="text-blue-300 flex items-center gap-1.5 mb-1">
                        <HelpCircle className="w-3.5 h-3.5" /> Explanation:
                      </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {filteredIdList.length > 0 && (
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Part 2: Identification ({filteredIdList.length} items shown)
              </h3>

              {filteredIdList.map((q) => (
                <div
                  key={q.id}
                  className={`border rounded-2xl p-5 shadow-lg space-y-3 transition-all ${
                    q.isCorrect ? 'bg-slate-900/90 border-slate-800' : 'bg-red-950/20 border-red-900/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-mono font-bold text-slate-400">Question {q.number} of {totalQuestions}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                      q.isCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {q.isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      {q.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  <h4 className="text-sm md:text-base font-bold text-white leading-relaxed">{q.question}</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Your Answer:</div>
                      <div className={`font-mono text-sm mt-1 ${q.isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>
                        {q.studentAns || '<Blank / Unanswered>'}
                      </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Accepted Answers:</div>
                      <div className="font-mono text-sm mt-1 text-emerald-400 font-bold">
                        {q.acceptableAnswers.join(' / ')}
                      </div>
                    </div>
                  </div>

                  {q.explanation && (
                    <div className="mt-3 bg-blue-950/30 border border-blue-900/50 rounded-xl p-3.5 text-xs text-blue-200 leading-relaxed">
                      <strong className="text-blue-300 flex items-center gap-1.5 mb-1">
                        <HelpCircle className="w-3.5 h-3.5" /> Explanation:
                      </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // ACTIVE EXAM VIEW
  // -------------------------------------------------------------
  const isMcqAnswered = mcqAnswers[currentMcqIndex] !== undefined;
  const isIdAnswered = idEvaluated[currentIdIndex] !== undefined;

  return (
    <div className="space-y-4 pb-12">
      {/* Top Status Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 md:p-4 shadow-xl flex flex-wrap items-center justify-between gap-3">
        {/* Left: Course & Question Counter */}
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
            {currentCourse.title}
          </span>
          <span className="text-xs font-mono font-bold text-white">
            {examPart === 'mcq' ? `Q${currentMcqIndex + 1} of ${totalQuestions}` : `Q${totalMcqs + currentIdIndex + 1} of ${totalQuestions}`}
          </span>
        </div>

        {/* Center: Part Switcher Tabs */}
        <div className="flex items-center bg-slate-950 border border-slate-800 p-0.5 rounded-xl">
          <button
            onClick={() => setExamPart('mcq')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              examPart === 'mcq' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Part 1: MCQ ({answeredMcqCount}/{totalMcqs})
          </button>
          <button
            onClick={() => setExamPart('id')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              examPart === 'id' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Part 2: ID ({answeredIdCount}/{totalIds})
          </button>
        </div>

        {/* Right: Timer & Finish Button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-xl text-xs font-mono font-bold text-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{formatTimer(secondsLeft)}</span>
          </div>

          <button
            onClick={() => setShowJumpDrawer(!showJumpDrawer)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors"
            title="Question Navigator Grid"
          >
            <Grid className="w-4 h-4" />
          </button>

          <button
            onClick={() => setConfirmSubmitModal(true)}
            className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-md transition-all"
          >
            Finish ({totalAnswered}/{totalQuestions})
          </button>
        </div>
      </div>

      {/* Question Navigator Drawer */}
      {showJumpDrawer && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Grid className="w-4 h-4 text-amber-400" /> Question Navigator
            </span>
            <span className="text-xs text-slate-400 font-mono">{totalAnswered}/{totalQuestions} Answered</span>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] text-slate-400 font-bold uppercase">Part 1: MCQ (1-{totalMcqs})</div>
            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-14 gap-1.5">
              {activeExam.mcq.map((q, idx) => {
                const ans = mcqAnswers[idx];
                const isCur = examPart === 'mcq' && currentMcqIndex === idx;
                let bg = 'bg-slate-800 text-slate-400';
                if (ans !== undefined) {
                  bg = ans === q.correctAnswer ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white';
                }
                return (
                  <button
                    key={q.id}
                    onClick={() => { setExamPart('mcq'); setCurrentMcqIndex(idx); setShowJumpDrawer(false); }}
                    className={`h-7 rounded-lg text-xs font-mono font-bold transition-all ${bg} ${
                      isCur ? 'ring-2 ring-amber-400 scale-105' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="text-[11px] text-slate-400 font-bold uppercase pt-2">Part 2: Identification ({totalMcqs + 1}-{totalQuestions})</div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
              {activeExam.identification.map((q, idx) => {
                const isEval = idEvaluated[idx];
                const isCur = examPart === 'id' && currentIdIndex === idx;
                let bg = 'bg-slate-800 text-slate-400';
                if (isEval) {
                  bg = isEval.isCorrect ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white';
                }
                return (
                  <button
                    key={q.id}
                    onClick={() => { setExamPart('id'); setCurrentIdIndex(idx); setShowJumpDrawer(false); }}
                    className={`h-7 rounded-lg text-xs font-mono font-bold transition-all ${bg} ${
                      isCur ? 'ring-2 ring-amber-400 scale-105' : ''
                    }`}
                  >
                    {totalMcqs + idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Question Card */}
      {examPart === 'mcq' ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-7 shadow-xl space-y-5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono font-bold">Question {currentMcqIndex + 1} of {totalQuestions}</span>
            <button
              onClick={() => handleToggleFlag('mcq', currentMcqIndex)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
                flagged[`mcq_${currentMcqIndex}`] ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-slate-400'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{flagged[`mcq_${currentMcqIndex}`] ? 'Flagged' : 'Flag'}</span>
            </button>
          </div>

          <h3 className="text-base md:text-xl font-bold text-white leading-relaxed">
            {currentMcq.question}
          </h3>

          {/* MCQ Options with Instant Feedback */}
          <div className="space-y-2.5 pt-2">
            {currentMcq.options.map((option, optIdx) => {
              const isSelected = mcqAnswers[currentMcqIndex] === optIdx;
              const isCorrectOption = currentMcq.correctAnswer === optIdx;

              let style = 'bg-slate-950/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700 text-slate-200';
              if (isMcqAnswered) {
                if (isCorrectOption) {
                  style = 'bg-emerald-950/50 border-emerald-500 text-emerald-100 font-semibold ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrectOption) {
                  style = 'bg-red-950/50 border-red-500 text-red-100 font-semibold ring-1 ring-red-500';
                } else {
                  style = 'bg-slate-950/30 border-slate-800/60 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectMcqOption(optIdx)}
                  disabled={isMcqAnswered}
                  className={`w-full text-left p-3.5 md:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs md:text-sm ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 border ${
                      isMcqAnswered && isCorrectOption
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : isMcqAnswered && isSelected && !isCorrectOption
                        ? 'bg-red-500 text-white border-red-400'
                        : 'border-slate-700 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="flex-1">{option}</span>
                  </div>

                  {isMcqAnswered && isCorrectOption && (
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 shrink-0">
                      <Check className="w-4 h-4" /> Correct
                    </span>
                  )}
                  {isMcqAnswered && isSelected && !isCorrectOption && (
                    <span className="text-xs text-red-400 font-bold flex items-center gap-1 shrink-0">
                      <X className="w-4 h-4" /> Wrong
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Feedback Explanation Box */}
          {isMcqAnswered && (
            <div className="mt-4 bg-blue-950/30 border border-blue-900/50 rounded-2xl p-4 text-xs md:text-sm text-blue-200 leading-relaxed animate-fadeIn">
              <div className="font-bold text-blue-300 flex items-center gap-2 mb-1.5">
                <HelpCircle className="w-4 h-4 text-blue-400" />
                Lesson Explanation & Key Rationale:
              </div>
              <p>{currentMcq.explanation}</p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={() => setCurrentMcqIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentMcqIndex === 0}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            {currentMcqIndex < totalMcqs - 1 ? (
              <button
                onClick={() => setCurrentMcqIndex((prev) => prev + 1)}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setExamPart('id')}
                className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all"
              >
                Proceed to Part 2: Identification <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Identification Part */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-7 shadow-xl space-y-5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono font-bold">Question {totalMcqs + currentIdIndex + 1} of {totalQuestions} (Identification)</span>
            <button
              onClick={() => handleToggleFlag('id', currentIdIndex)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
                flagged[`id_${currentIdIndex}`] ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-slate-400'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{flagged[`id_${currentIdIndex}`] ? 'Flagged' : 'Flag'}</span>
            </button>
          </div>

          <h3 className="text-base md:text-xl font-bold text-white leading-relaxed">
            {currentId.question}
          </h3>

          {/* Identification Input Form */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Type your answer here..."
                value={idAnswers[currentIdIndex] || ''}
                disabled={isIdAnswered}
                onChange={(e) => setIdAnswers((prev) => ({ ...prev, [currentIdIndex]: e.target.value }))}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSubmitIdAnswer(currentIdIndex); }}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 disabled:opacity-75 font-mono"
              />
              {!isIdAnswered && (
                <button
                  onClick={() => handleSubmitIdAnswer(currentIdIndex)}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all shrink-0"
                >
                  <Send className="w-4 h-4" /> Submit Answer
                </button>
              )}
            </div>

            {/* Identification Instant Feedback */}
            {isIdAnswered && (
              <div className={`p-4 rounded-2xl border text-xs md:text-sm animate-fadeIn space-y-2 ${
                idEvaluated[currentIdIndex]?.isCorrect
                  ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-200'
                  : 'bg-red-950/40 border-red-600/60 text-red-200'
              }`}>
                <div className="flex items-center gap-2 font-bold text-base">
                  {idEvaluated[currentIdIndex]?.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Correct Answer!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span>Incorrect!</span>
                    </>
                  )}
                </div>

                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-400">Accepted Answer(s): </span>
                  <span className="font-mono text-emerald-300 font-bold">{currentId.acceptableAnswers.join(' / ')}</span>
                </div>

                {currentId.explanation && (
                  <p className="text-xs text-slate-300 pt-1 border-t border-slate-800/80 leading-relaxed">
                    {currentId.explanation}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={() => setCurrentIdIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIdIndex === 0}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            {currentIdIndex < totalIds - 1 ? (
              <button
                onClick={() => setCurrentIdIndex((prev) => prev + 1)}
                className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setConfirmSubmitModal(true)}
                className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
              >
                Review & Finish Exam <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Confirm Submission Modal */}
      {confirmSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <AlertTriangle className="w-5 h-5" /> Confirm Examination Submission
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              You have answered <strong className="text-white">{totalAnswered} of {totalQuestions} questions</strong>.
              {totalAnswered < totalQuestions && (
                <span className="block mt-2 text-red-300 font-semibold">
                  Warning: You have {totalQuestions - totalAnswered} unanswered questions remaining.
                </span>
              )}
            </p>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => setConfirmSubmitModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                Cancel & Review
              </button>
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black shadow-lg transition-colors"
              >
                Submit Final Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
