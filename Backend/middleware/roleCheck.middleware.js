export const isAdmin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};


// export const isAdmin = roleCheck("Admin");
// export const isOfficer = roleCheck("Officer", "Admin");
// export const isCitizen = roleCheck("Citizen", "Officer", "Admin");


