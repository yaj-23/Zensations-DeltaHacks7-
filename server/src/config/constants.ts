export const PORT = process.env.PORT || 4000;
// export const COCKROACH_URL = process.env.COCKROACH_URL || "";
export const COCKROACH_CONFIG = {
  connectionString:
    "postgres://samyak@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=disabled&options=--cluster=joyful-rhino-1116",
};
