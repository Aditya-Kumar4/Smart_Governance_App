import "dotenv/config";

import app from "./app.js";
import sequelize from "./database/index.db.js";
import seedDatabase from "./database/seed.js";

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");

    // ✅ SAFE — DO NOT MODIFY EXISTING TABLES
    await sequelize.sync();
    console.log("✅ Models synced");

    await seedDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB Error:", err.message);
  }
})();
