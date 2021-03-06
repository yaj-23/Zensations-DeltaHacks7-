import express, { Request, Response } from 'express';

export const router = express.Router({
    strict: true
});

router.put('/', (req: Request, res: Response) => {
    console.log(req, res);
    res.status(200).json(req.body);
});