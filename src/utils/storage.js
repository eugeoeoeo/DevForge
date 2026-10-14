// Multi-Subject Local Storage Persistence for PUP Reviewers

const STORAGE_KEY = 'pup_reviewers_device_profile_v2';
const ACTIVE_EXAM_PREFIX = 'pup_active_exam_';

const defaultState = {
  activeCourse: 'webdev', // 'webdev' | 'electives'
  profile: {
    studentName: 'Student',
    deviceId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'dev-' + Date.now(),
    createdDate: new Date().toISOString()
  },
  courses: {
    webdev: {
      completedLessons: {},
      quizScores: {},
      examResults: null
    },
    electives: {
      completedLessons: {},
      quizScores: {},
      examResults: null
    }
  }
};

export function loadUserProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      courses: {
        webdev: { ...defaultState.courses.webdev, ...(parsed.courses?.webdev || parsed.completedLessons ? { completedLessons: parsed.completedLessons || {}, quizScores: parsed.quizScores || {}, examResults: parsed.examResults || null } : {}) },
        electives: { ...defaultState.courses.electives, ...(parsed.courses?.electives || {}) }
      }
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

export function markLessonComplete(lessonId, courseId = 'webdev') {
  const cur = loadUserProgress();
  if (!cur.courses[courseId]) cur.courses[courseId] = { completedLessons: {}, quizScores: {}, examResults: null };
  cur.courses[courseId].completedLessons[lessonId] = true;
  saveUserProgress(cur);
  return cur;
}

export function saveQuizResult(lessonId, score, total, courseId = 'webdev') {
  const cur = loadUserProgress();
  if (!cur.courses[courseId]) cur.courses[courseId] = { completedLessons: {}, quizScores: {}, examResults: null };
  const percentage = Math.round((score / total) * 100);
  cur.courses[courseId].quizScores[lessonId] = { score, total, percentage, date: new Date().toISOString() };
  if (percentage >= 60) {
    cur.courses[courseId].completedLessons[lessonId] = true;
  }
  saveUserProgress(cur);
  return cur;
}

export function saveExamResult(resultData, courseId = 'webdev') {
  const cur = loadUserProgress();
  if (!cur.courses[courseId]) cur.courses[courseId] = { completedLessons: {}, quizScores: {}, examResults: null };
  cur.courses[courseId].examResults = {
    ...resultData,
    courseId,
    date: new Date().toISOString()
  };
  saveUserProgress(cur);
  return cur;
}

export const saveExamAttempt = saveExamResult;

export function clearActiveExamSession(courseId = 'webdev') {
  try {
    localStorage.removeItem(ACTIVE_EXAM_PREFIX + courseId);
  } catch (e) {
    console.error(e);
  }
}

export function loadActiveExamSession(courseId = 'webdev') {
  try {
    const raw = localStorage.getItem(ACTIVE_EXAM_PREFIX + courseId);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function saveActiveExamSession(session, courseId = 'webdev') {
  try {
    localStorage.setItem(ACTIVE_EXAM_PREFIX + courseId, JSON.stringify(session));
  } catch (e) {
    console.error(e);
  }
}
