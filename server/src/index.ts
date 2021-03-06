import express from 'express';
import cors from 'cors';
import { PORT } from './config/constants';

/**
 * https://betterprogramming.pub/create-an-express-server-using-typescript-dec8a51e7f8d
 */
const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});