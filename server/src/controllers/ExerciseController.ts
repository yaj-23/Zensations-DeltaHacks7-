import { handler } from "./Database";

export class ExerciseController {
  
  // TODO: Add controller functions here
  public async getExercise(id: string) {
    return (await handler(`SELECT * FROM data`)).rows;
  }
}
