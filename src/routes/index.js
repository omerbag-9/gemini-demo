import express from "express";
const router = express.Router();
//Routes
import homeRouter from './home.route.js';
import geminiRouter from './gemini.route.js'

router.use('/',homeRouter)
router.use('/gemini',geminiRouter);

export default router