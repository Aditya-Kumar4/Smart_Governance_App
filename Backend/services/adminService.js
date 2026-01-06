import User from "../models/user.model.js";

export const getAllUsers = () => User.findAll();

export const updateUserRole = async (id, role) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found");
  user.role = role;
  return user.save();
};

export const toggleUserStatus = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found");
  user.is_active = !user.is_active;
  return user.save();
};

export const getSystemStats = async () => ({
  users: await User.count()
});
