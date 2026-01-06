import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import Department from "../models/department.model.js";

const seedDatabase = async () => {
  const departments = [
    "Road Damage",
    "Water Supply",
    "Electricity",
    "Garbage",
    "Public Safety",
    "Other"
  ];

  for (const name of departments) {
    await Department.findOrCreate({
      where: { department_name: name }
    });
  }

  const password = await bcrypt.hash("password123", 10);

  await User.findOrCreate({
    where: { email: "admin@example.com" },
    defaults: { name: "Admin", password, role: "ADMIN" }
  });
};

export default seedDatabase;
