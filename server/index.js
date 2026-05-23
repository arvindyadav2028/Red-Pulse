import "./env.js";
import app from "./app.js";
import connectDB from "./config/database.js";
import config from "./config/config.js";

const PORT = config.PORT || 3000;

const start = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`\n🚀 RedPulse server running`);
        console.log(`   http://localhost:${PORT}`);
        console.log(`   ENV: ${config.NODE_ENV}\n`);
    });
};

start().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
});
