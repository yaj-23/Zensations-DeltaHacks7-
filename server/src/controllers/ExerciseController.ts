import { handler } from "./Database";
import { DATA } from "../config/data";

export class ExerciseController {
  // TODO: Add controller functions here
  public async getExercise(id: string) {
    return (await handler(`SELECT * FROM data`)).rows;
  }

  public async putExercise() {
    await Promise.all(DATA.map((d) => handler(`
    INSERT INTO data(pose_data)
    value('${JSON.stringify(d)}')
    `)));
  }
}
