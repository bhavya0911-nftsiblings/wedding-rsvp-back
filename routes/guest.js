import express from "express";
import { save, read } from "../controllers/guest.js";

const router = express.Router();

router.post("/new", save);

router.get("/read", read);

export default router;