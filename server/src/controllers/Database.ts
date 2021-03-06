import { COCKROACH_CONFIG } from "../config/constants";
import { Pool } from "pg";

const pool = new Pool(COCKROACH_CONFIG);

export const handler = async (query: string): Promise<any> => {
  return pool.query(query).catch(err => console.error(err));
};