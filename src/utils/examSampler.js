// Dynamic Exam Sampler supporting Web Development & Elective (Applied Machine Learning)
import { EXAM_POOL as WEBDEV_POOL } from '../data/examPool.js';
import { ELECTIVES_EXAM_POOL } from '../data/electivesExamPool.js';

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateExamSession(courseId = 'webdev') {
  const pool = courseId === 'electives' ? ELECTIVES_EXAM_POOL : WEBDEV_POOL;

  const shuffledMcqs = shuffleArray(pool.mcq).map((q, idx) => {
    const correctText = q.options[q.correctAnswer];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectAnswer = shuffledOptions.indexOf(correctText);

    return {
      ...q,
      number: idx + 1,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer
    };
  });

  const shuffledIds = shuffleArray(pool.identification).map((q, idx) => ({
    ...q,
    number: shuffledMcqs.length + 1 + idx
  }));

  return {
    sessionId: 'session-' + courseId + '-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    courseId,
    createdAt: new Date().toISOString(),
    totalQuestions: shuffledMcqs.length + shuffledIds.length,
    mcq: shuffledMcqs,
    identification: shuffledIds
  };
}
