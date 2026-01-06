import { DataTypes } from "sequelize";
import sequelize from "../database/index.db.js";

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(150), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  phone: DataTypes.STRING(15),
  role: {
    type: DataTypes.ENUM("CITIZEN", "ADMIN", "HEAD_EMPLOYEE", "OFFICER"),
    allowNull: false
  }
}, {
  tableName: "users",
  timestamps: true,
  underscored: true
});

export default User;
