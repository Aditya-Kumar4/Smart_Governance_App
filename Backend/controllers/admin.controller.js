import * as adminService from "../services/adminService.js";

export const users = async (req, res) => {
  try {
    const users = await adminService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateRole = async (req, res) => {
  try {
    const user = await adminService.updateUserRole(
      req.params.id,
      req.body.role
    );
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const toggleStatus = async (req, res) => {
  try {
    const user = await adminService.toggleUserStatus(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const stats = async (req, res) => {
  try {
    const stats = await adminService.getSystemStats();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
