import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT } from "./config/constants";
import { router } from "./routes";

dotenv.config();

/**
 * https://betterprogramming.pub/create-an-express-server-using-typescript-dec8a51e7f8d
 */
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("IF YOU SEE THIS, THE SERVER IS WORKING");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
