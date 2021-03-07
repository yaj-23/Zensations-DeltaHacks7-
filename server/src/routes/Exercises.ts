import express, { Request, Response } from "express";
import { EMOTION } from "../config/models";
import { ExerciseController } from "../controllers/ExerciseController";

const controller = new ExerciseController();

export const router = express.Router({
  strict: true,
});

router.get("/:id", async (req: Request, res: Response) => {
  res.status(200).json(await controller.getExercise(req.params.id));
});

// fixme DELETE AFTER
// router.post("/", async (req: Request, res: Response) => {
//   res.status(200).json(await controller.putExercise());
// });

router.get("/emotion/:emotion", async (req: Request, res: Response) => {
  res.status(200).json(await controller.getAllExercises(req.params.emotion.toUpperCase() as EMOTION));
});
