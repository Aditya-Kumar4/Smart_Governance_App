import { DataTypes } from "sequelize";
import sequelize from "../database/index.db.js";

const OfficerAssignments = sequelize.define("OfficerAssignments", {
  complaint_id: { type: DataTypes.INTEGER, allowNull: false },
  assigned_by: { type: DataTypes.INTEGER, allowNull: false },
  assigned_to: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: true });

export default OfficerAssignments;
