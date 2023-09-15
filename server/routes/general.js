import express from "express";
import { getUser, getdashboardstats } from "../controllers/general.js"
const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getdashboardstats);

export default router;