// Device-Specific Local Storage Persistence for PUP Web Development Reviewer

const STORAGE_KEY = 'pup_webdev_device_profile_v1';
const ACTIVE_EXAM_KEY = 'pup_webdev_active_exam_session_v1';

const defaultState = {
  profile: {
    studentName: 'Student',
    studentNumber: '',
    deviceId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'dev-' + Date.now(),
    createdDate: new Date().toISOString()
  },
  completedLessons: {}, // { [lessonId]: boolean }
  quizScores: {},       // { [lessonId]: { score: number, total: number, percentage: number, date: string } }
  examResults: null     // { score: number, total: number, percentage: number, date: string, details: [...] }
};

export function loadUserProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      profile: { ...defaultState.profile, ...(parsed.profile || {}) },
      completedLessons: parsed.completedLessons || {},
      quizScores: parsed.quizScores || {},
      examResults: parsed.examResults || null
    };
  } catch (err) {
    console.error('Failed to load storage:', err);
    return defaultState;
  }
}

export function saveUserProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save storage:', err);
  }
}

export function markLessonComplete(lessonId) {
  const cur = loadUserProgress();
  cur.completedLessons[lessonId] = true;
  saveUserProgress(cur);
  return cur;
}

export function saveQuizResult(lessonId, score, total) {
  const cur = loadUserProgress();
  const percentage = Math.round((score / total) * 100);
  cur.quizScores[lessonId] = {
    score,
    total,
    percentage,
    date: new Date().toISOString()
  };
  if (percentage >= 60) {
    cur.completedLessons[lessonId] = true;
  }
  saveUserProgress(cur);
  return cur;
}

export function saveExamResult(resultData) {
  const cur = loadUserProgress();
  cur.examResults = {
    ...resultData,
    date: new Date().toISOString()
  };
  saveUserProgress(cur);
  return cur;
}

export function clearActiveExamSession() {
  try {
    localStorage.removeItem(ACTIVE_EXAM_KEY);
  } catch (e) {
    console.error(e);
  }
}

export function loadActiveExamSession() {
  try {
    const raw = localStorage.getItem(ACTIVE_EXAM_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function saveActiveExamSession(session) {
  try {
    localStorage.setItem(ACTIVE_EXAM_KEY, JSON.stringify(session));
  } catch (e) {
    console.error(e);
  }
}

export function getOverallProgress(progress) {
  const totalLessons = 11;
  const completed = Object.keys(progress.completedLessons || {}).filter(k => progress.completedLessons[k]).length;
  const lessonPct = Math.round((completed / totalLessons) * 100);
  const examPct = progress.examResults ? progress.examResults.percentage : 0;
  return {
    completedLessonsCount: completed,
    totalLessons,
    lessonPercentage: lessonPct,
    examScore: progress.examResults ? progress.examResults.score : null,
    examTotal: progress.examResults ? progress.examResults.total : 60,
    examPercentage: examPct,
    isExamPassed: examPct >= 70
  };
}

export const saveExamAttempt = saveExamResult;
