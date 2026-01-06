import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.js";
import {
  createComplaint,
  getMyComplaints,
  getComplaintHistory
} from "../controllers/complaint.controller.js";

const router = express.Router();

// Create complaint
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createComplaint
);

// Get logged-in user's complaints
router.get("/", authMiddleware, getMyComplaints);

// Complaint history
router.get("/:id/history", authMiddleware, getComplaintHistory);

export default router;
