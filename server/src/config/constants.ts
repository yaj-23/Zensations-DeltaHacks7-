export const PORT = process.env.PORT || 4000;
// export const COCKROACH_URL = process.env.COCKROACH_URL || "";
export const COCKROACH_CONFIG = {
  // user: process.env.PGUSER || "",
  // password: process.env.PGPASSWORD || "",
  // host: process.env.PGHOST || "",
  // database: process.env.PGDATABASE || "",
  // port: +(process.env.PGPORT || 0),
  // ssl: {
  //   rejectUnauthorized: false,
  // },

  // idleTimeoutMillis: 1000,
  // connectionTimeoutMillis: 0,
  connectionString:
    "postgres://samyak@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=disabled&options=--cluster=joyful-rhino-1116",
};
