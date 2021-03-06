import express, { Request, Response } from "express";
import { ExerciseController } from "../controllers/ExerciseController";

const controller = new ExerciseController();

export const router = express.Router({
  strict: true,
});

// TODO: Add Exercise routes here

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(req.url);
});