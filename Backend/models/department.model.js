import { DataTypes } from "sequelize";
import sequelize from "../database/index.db.js";
import User from "./user.model.js";

const Department = sequelize.define("Department", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  department_name: { type: DataTypes.STRING(100), allowNull: false },
  description: DataTypes.TEXT
}, {
  tableName: "departments",
  timestamps: true,
  underscored: true
});

Department.belongsTo(User, {
  foreignKey: "head_employee_id",
  onDelete: "SET NULL"
});

export default Department;
