import express  from "express";
const router = express.Router();
//Controllers
import { generate } from "../controllers/gemeni.controller.js";

router.use('/generate',generate);

export default router;