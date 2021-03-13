import { Request, Response } from "express";

const { Router } = require('express');
const price = require('./price');

const router = Router();

router.use('/price', price);

export default router;