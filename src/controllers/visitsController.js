import { VisitsService } from "../services/visitsService.js";

export const visitsController = {
  async recordVisit(req, res, next) {
    try {
      const count = await VisitsService.incrementCounter();

      res.json({
        success: true,
        count: count,
        message: "Visit recorded successfully",
      });
    } catch (error) {
      next(error);
    }
  },

  async getVisitCount(req, res, next) {
    try {
      const count = await VisitsService.getCounter();

      res.json({
        success: true,
        count: count,
      });
    } catch (error) {
      next(error);
    }
  },
};
