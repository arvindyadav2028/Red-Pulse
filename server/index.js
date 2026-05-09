import "./env.js";
import app from "./app.js";
import connectDB from "./config/database.js";

// DB connection
connectDB();

// server
app.listen(3000, () => {
    console.log("Server is running on port 3000 🚀");
});