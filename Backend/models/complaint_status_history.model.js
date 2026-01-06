import { DataTypes } from "sequelize";
import sequelize from "../database/index.db.js";

const ComplaintStatusHistory = sequelize.define(
  "ComplaintStatusHistory",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    complaint_id: { type: DataTypes.INTEGER, allowNull: false },

    status: {
      type: DataTypes.ENUM("PENDING", "IN_PROGRESS", "RESOLVED"),
      allowNull: false,
    },

    updated_by: { type: DataTypes.INTEGER, allowNull: false },

    remarks: { type: DataTypes.STRING },
  },
  {
    tableName: "complaint_status_history",
    timestamps: true,
  }
);

export default ComplaintStatusHistory;
