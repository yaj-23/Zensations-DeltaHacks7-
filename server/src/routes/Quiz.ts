import express, { Request, Response } from "express";
import { QuizController } from "../controllers/QuizController";

const controller = new QuizController();

export const router = express.Router({
  strict: true,
});

const test: number[] = [];

router.put("/", (req: Request, res: Response) => {
  res.status(200).json(controller.evaluate(test));
});
