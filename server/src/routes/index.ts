import { router as quizRouter } from './Quiz';
import { router as exerciseRouter } from './Exercises';
import express from 'express';

/**
 * Global imports, just so we don't clutter 
 * src/index.ts with { router as routerName } from ...
 */
export const router = express.Router();

router.use('/quiz', quizRouter);
router.use('/exercises', exerciseRouter);