// Exam Data Layer
import { EXAM_POOL } from './examPool.js';
import { generateExamSession } from '../utils/examSampler.js';

export { EXAM_POOL, generateExamSession };
export const EXAM_DATA = generateExamSession();
