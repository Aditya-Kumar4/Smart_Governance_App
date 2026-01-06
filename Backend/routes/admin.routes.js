import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/roleCheck.middleware.js";
import * as adminController from "../controllers/admin.controller.js";

const router = express.Router();

router.use(authMiddleware); // 🔥 MUST BE FIRST
router.use(isAdmin);

router.get("/users", adminController.users);
router.put("/users/:id/role", adminController.updateRole);
router.put("/users/:id/status", adminController.toggleStatus);
router.get("/stats", adminController.stats);

export default router;
