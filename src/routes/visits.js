import { Router } from "express";
import { visitsController } from "../controllers/visitsController.js";

const router = Router();

router.post("/", visitsController.recordVisit);
router.get("/", visitsController.getVisitCount);

export default router;
