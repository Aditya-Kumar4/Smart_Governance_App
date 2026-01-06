import Complaint from "../models/complaint.model.js";
import ComplaintStatusHistory from "../models/complaint_status_history.model.js";

export const createComplaint = (data, userId) =>
  Complaint.create({ ...data, citizen_id: userId });

export const getComplaintsByUser = (userId) =>
  Complaint.findAll({
    where: { citizen_id: userId },
    order: [["created_at", "DESC"]]
  });

export const getHistory = (complaintId) =>
  ComplaintStatusHistory.findAll({
    where: { complaint_id: complaintId },
    order: [["created_at", "ASC"]]
  });
