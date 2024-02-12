import express from "express";
import {getDefault} from "../controllers/Default.js"
const router = express.Router();

router.get("/", getDefault)

export default router