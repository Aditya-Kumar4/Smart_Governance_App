import { DataTypes } from "sequelize";
import sequelize from "../database/index.db.js";

const Role = sequelize.define("Role", {
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
}, { timestamps: false });

export default Role;
