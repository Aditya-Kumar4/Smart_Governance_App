import { DataTypes } from "sequelize";
import sequelize from "../database/index.db.js";

const Complaint = sequelize.define(
  "Complaint",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM("PENDING", "IN_PROGRESS", "RESOLVED"),
      defaultValue: "PENDING"
    },

    priority: {
      type: DataTypes.ENUM("LOW", "MEDIUM", "HIGH"),
      defaultValue: "MEDIUM"
    },

    citizen_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "complaints",
    timestamps: false // 🔥 CRITICAL FIX
  }
);

export default Complaint;
