import sequelize from "../database/index.db.js";

import User from "./user.model.js";
import Role from "./role.model.js";
import Department from "./department.model.js";
import Complaint from "./complaint.model.js";
import ComplaintStatusHistory from "./complaint_status_history.model.js";
import ComplaintAssignment from "./ComplaintAssignment.js";

/* =======================
   ASSOCIATIONS
======================= */

// Role ↔ User
Role.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(Role, { foreignKey: "role_id" });

// Department ↔ User
Department.hasMany(User, { foreignKey: "department_id" });
User.belongsTo(Department, { foreignKey: "department_id" });

// Department ↔ Complaint
Department.hasMany(Complaint, { foreignKey: "department_id" });
Complaint.belongsTo(Department, { foreignKey: "department_id" });

// Citizen ↔ Complaint
User.hasMany(Complaint, { foreignKey: "citizen_id", as: "citizenComplaints" });
Complaint.belongsTo(User, { foreignKey: "citizen_id", as: "citizen" });

// Officer ↔ Complaint (Assignment)
User.hasMany(ComplaintAssignment, { foreignKey: "officer_id" });
ComplaintAssignment.belongsTo(User, { foreignKey: "officer_id" });

Complaint.hasOne(ComplaintAssignment, { foreignKey: "complaint_id" });
ComplaintAssignment.belongsTo(Complaint, { foreignKey: "complaint_id" });

// Complaint ↔ Status History
Complaint.hasMany(ComplaintStatusHistory, {
  foreignKey: "complaint_id",
  as: "history",
});
ComplaintStatusHistory.belongsTo(Complaint, {
  foreignKey: "complaint_id",
});

User.hasMany(ComplaintStatusHistory, {
  foreignKey: "updated_by",
});
ComplaintStatusHistory.belongsTo(User, {
  foreignKey: "updated_by",
});

export {
  sequelize,
  User,
  Role,
  Department,
  Complaint,
  ComplaintAssignment,
  ComplaintStatusHistory,
};
