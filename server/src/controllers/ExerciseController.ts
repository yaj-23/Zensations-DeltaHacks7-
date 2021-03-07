import { handler } from "./Database";
import { DATA } from "../config/data";
import { EMOTION } from "../config/models";

export class ExerciseController {
  public async getExercise(id: string) {
    console.log(id);
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

  public async getAllExerciseIds() {
    return (await handler(`SELECT pose_id FROM data`)).rows;
  }

  public async putEmotions() {
    const ids = (await this.getAllExerciseIds()).map(
      (pose_ids: any) => pose_ids["pose_id"]
    );
    await Promise.all(
      ids.map((id: string) =>
        handler(
          `INSERT INTO emotions (pose_id, emotion) VALUES ('${id}'::uuid, '${
            ["ANGRY", "SAD", "HAPPY"][Math.floor(Math.random() * Math.floor(3))]
          }')`
        )
      )
    );
  }

  public async getAllExercises(emotion: EMOTION) {
    return (
      await handler(`
    SELECT pose_data FROM data WHERE pose_id IN (
      SELECT pose_id FROM emotions where emotion='${emotion}'
    )
    ORDER BY RANDOM ()
    LIMIT 5
    `)
    ).rows;
  }
}
