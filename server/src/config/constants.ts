export const PORT = process.env.PORT || 4000;
export const COCKROACH_URL = process.env.COCKROACH_URL || "";
export const COCKROACH_CONFIG = {
  user: process.env.PGUSER || "",
  password: process.env.PGPASSWORD || "",
  host: process.env.PGHOST || "",
  database: process.env.PGDATABASE || "",
  port: +(process.env.PGPORT || 0),
  ssl: {
    rejectUnauthorized: false,
  },
};
