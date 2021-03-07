import { handler } from "./Database";

export class ExerciseController {
  // TODO: Add controller functions here

  public async getExercise(id: string) {
    console.log("Over here");
    const toPut = `SELECT * FROM data`;
    const returnVal = await handler(toPut);

    return returnVal.rows;
  }
}
