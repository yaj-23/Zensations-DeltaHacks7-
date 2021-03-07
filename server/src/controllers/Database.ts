import { COCKROACH_CONFIG } from "../config/constants";
import { Pool } from "pg";

const pool = new Pool(COCKROACH_CONFIG);
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.message);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.message);
    }
    console.log(result.rows);
  });
});

pool.on("connect", () => {
  console.log("Connected!");
});

export const handler = async (query: string): Promise<any> => {
  return await pool.query(query).catch((err) => console.error(err));
};
