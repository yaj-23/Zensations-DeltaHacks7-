import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT, COCKROACH_CONFIG } from "./config/constants";
import { quizRouter } from "./routes";
import { Pool } from "pg";

dotenv.config();

/**
 * https://betterprogramming.pub/create-an-express-server-using-typescript-dec8a51e7f8d
 */
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("IF YOU SEE THIS, THE SERVER IS WORKING");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// const pool = new Pool(COCKROACH_CONFIG);

(async () => {
  //   const client = await pool.connect();

  // Exit program
  process.exit();
})().catch((err) => console.log(err.stack));
