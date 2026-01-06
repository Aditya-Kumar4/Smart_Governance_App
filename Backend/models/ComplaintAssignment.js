import { DataTypes } from "sequelize";
import sequelize from "../database/index.db.js";
import Complaint from "./complaint.model.js";
import User from "./user.model.js";

const ComplaintAssignment = sequelize.define("ComplaintAssignment", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
}, {
  tableName: "complaint_assignments",
  timestamps: false,
  underscored: true
});

ComplaintAssignment.belongsTo(Complaint, {
  foreignKey: "complaint_id",
  onDelete: "CASCADE"
});

ComplaintAssignment.belongsTo(User, {
  foreignKey: "assigned_by"
});

ComplaintAssignment.belongsTo(User, {
  foreignKey: "assigned_to"
});

export default ComplaintAssignment;
