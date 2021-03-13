import { Request, Response } from "express";

const { Router } = require('express');
const price = require('./price');

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send();
})

router.use('/price', price);

export default router;