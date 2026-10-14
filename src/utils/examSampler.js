// Dynamic Exam Sampler
// Contains strictly the 56 MCQs + 10 Identification items
// Shuffles question order and shuffles options A, B, C, D using Fisher-Yates

import { EXAM_POOL } from '../data/examPool.js';

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates an active 66-item WebDev practice examination:
 * - Exactly the 56 MCQs with shuffled questions and shuffled options A,B,C,D
 * - Exactly the 10 Identification items with shuffled order
 * Total: 66 items (56 MCQ + 10 ID)
 */
export function generateExamSession() {
  // 1. Shuffle and map 56 MCQs
  const shuffledMcqs = shuffleArray(EXAM_POOL.mcq).map((q, idx) => {
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

  // 2. Shuffle and map 10 Identification items
  const shuffledIds = shuffleArray(EXAM_POOL.identification).map((q, idx) => ({
    ...q,
    number: 57 + idx
  }));

  return {
    sessionId: 'session-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
    totalQuestions: shuffledMcqs.length + shuffledIds.length,
    mcq: shuffledMcqs,
    identification: shuffledIds
  };
}
