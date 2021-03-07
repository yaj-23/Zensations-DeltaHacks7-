import { COCKROACH_CONFIG } from "../config/constants";
import { Pool } from "pg";

const pool = new Pool(COCKROACH_CONFIG);

pool.on("connect", () => {
  console.log("Connected!");
});

pool.on("acquire", () => {
  console.log("acquire!");
});

pool.on("error", () => {
  console.log("error!");
});


export const handler = async (query: string): Promise<any> => {
  return await pool.query(query).catch((err) => console.error(err));
};
