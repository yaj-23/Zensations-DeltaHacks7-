import { handler } from "./Database";
import { DATA } from "../config/data";

export class ExerciseController {
  // TODO: Add controller functions here
  public async getExercise(id: string) {
    return (await handler(`SELECT * FROM data WHERE pose_id='${id}'::uuid`))
      .rows[0];
  }

  public async putExercise() {
    await Promise.all(
      DATA.map((d) => {
        return handler(
          `INSERT INTO data (pose_data) values ('${JSON.stringify(d)}')`
        );
      })
    );
  }

  public async getAllExercises() {
    return (await handler(`SELECT * FROM data`)).rows;
  }
}
