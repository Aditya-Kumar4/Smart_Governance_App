import * as complaintService from "../services/complaintService.js";

export const createComplaint = async (req, res) => {
  try {
    const { title, description, priority, department_id } = req.body;

    // 🔒 REQUIRED FIELD CHECK
    if (!department_id) {
      return res.status(400).json({
        message: "Department is required"
      });
    }

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required"
      });
    }

    const complaint = await complaintService.createComplaint(
      {
        title,
        description,
        priority,
        department_id,
        image_url: req.file?.path || null
      },
      req.user.id
    );

    res.status(201).json(complaint);
  } catch (err) {
    console.error("Create complaint error:", err);
    res.status(500).json({ message: "Failed to create complaint" });
  }
};

export const getMyComplaints = async (req, res) => {
  try {
    const complaints = await complaintService.getComplaintsByUser(req.user.id);
    res.json(complaints);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch complaints" });
  }
};

export const getComplaintHistory = async (req, res) => {
  try {
    const history = await complaintService.getHistory(req.params.id);
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch history" });
  }
};
