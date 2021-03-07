import express, { Request, Response } from "express";
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

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json(await controller.getAllExercises());
});
