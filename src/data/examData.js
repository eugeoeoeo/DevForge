// Web Development Examination Master Module
import { EXAM_POOL } from './examPool.js';
import { generateExamSession } from '../utils/examSampler.js';

export { EXAM_POOL } from './examPool.js';
export { generateExamSession } from '../utils/examSampler.js';

// Canonical 60-item practice exam (50 MCQ + 10 ID)
export const EXAM_DATA = generateExamSession(true);
