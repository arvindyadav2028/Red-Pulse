// Fail fast — crash at startup if required env vars are missing
const required = ["MONGO_URI", "JWT_SECRET"];
for (const key of required) {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

const config = {
    PORT:                   process.env.PORT || 3000,
    NODE_ENV:               process.env.NODE_ENV || "development",
    MONGO_URI:              process.env.MONGO_URI,
    JWT_SECRET:             process.env.JWT_SECRET,
    CLIENT_ORIGIN:          process.env.CLIENT_ORIGIN || "http://localhost:5173",
    // Email — optional; gracefully disabled if not provided
    GOOGLE_CLIENT_ID:       process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET:   process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN:   process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_USER:            process.env.GOOGLE_USER,
};

export default config;
