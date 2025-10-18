import { Router } from "express";
import visitsRouter from "./visits.js";

const router = Router();

router.use("/visits", visitsRouter);

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    service: "Visits Counter API",
  });
});

export default router;
