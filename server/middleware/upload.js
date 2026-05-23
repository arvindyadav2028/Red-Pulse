import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure uploads directory exists at startup
const UPLOAD_DIR = "uploads";
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const safe = Date.now() + "-" + Math.round(Math.random() * 1e6) + ext;
        cb(null, safe);
    },
});

const fileFilter = (req, file, cb) => {
    if (ALLOWED_MIME.has(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only JPEG, PNG, WebP and GIF images are allowed"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: MAX_FILE_SIZE },
});

export default upload;
