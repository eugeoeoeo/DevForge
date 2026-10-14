// Dynamic Exam Sampler for Web Development
// 60-item active exam: exactly 50 MCQs + 10 Identification items
// Shuffles question selection and shuffles options A, B, C, D using Fisher-Yates

import { EXAM_POOL } from '../data/examPool.js';

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function seededShuffle(array, seed = 42) {
  const arr = [...array];
  let s = seed;
  const nextRandom = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates an active 60-item WebDev practice examination.
 * - Exactly 50 MCQs sampled from 80-item pool with options shuffled
 * - Exactly 10 Identification sampled from 28-item pool
 */
export function generateExamSession(seeded = false) {
  const shuffler = seeded ? (arr) => seededShuffle(arr, 98765) : shuffleArray;

  // 1. Sample 50 MCQs
  const sampledMcqRaw = shuffler(EXAM_POOL.mcq).slice(0, 50);
  const sampledMcq = sampledMcqRaw.map((q, idx) => {
    const correctText = q.options[q.correctAnswer];
    const shuffledOptions = shuffler(q.options);
    const newCorrectAnswer = shuffledOptions.indexOf(correctText);

    return {
      ...q,
      number: idx + 1,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer
    };
  });

  // 2. Sample 10 Identification items
  const sampledIdRaw = shuffler(EXAM_POOL.identification).slice(0, 10);
  const sampledId = sampledIdRaw.map((q, idx) => ({
    ...q,
    number: 51 + idx
  }));

  return {
    sessionId: 'session-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
    mcq: sampledMcq,
    identification: sampledId
  };
}
