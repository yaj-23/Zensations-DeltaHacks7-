import { handler } from "./Database";
import { DATA } from "../config/data";
import { EMOTION } from "../config/models";

export class ExerciseController {
  public async getExercise(id: string) {
    return (await handler(`SELECT * FROM data WHERE pose_id='${id}'::uuid`))
      .rows[0];
  }

  public async putExercise() {
    await Promise.all(
      DATA.map((d) =>
        handler(`INSERT INTO data (pose_data) values ('${JSON.stringify(d)}')`)
      )
    );
  }

  public async getAllExercises(emotion: EMOTION) {
    return (
      await handler(`
    SELECT * FROM  data WHERE pose_id IN (
      SELECT pose_id FROM emotions where emotion='${emotion}'
    )
    ORDER BY RANDOM ()
    LIMIT 5
    `)
    ).rows;
  }
}
