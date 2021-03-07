import { COCKROACH_CONFIG } from "../config/constants";
import { Pool } from "pg";

const pool = new Pool(COCKROACH_CONFIG);

pool.on("connect", () => {
  console.log("Connected!");
});

export const handler = async (query: string): Promise<any> => {
  return await pool.query(query).catch((err) => console.error(err));
};
