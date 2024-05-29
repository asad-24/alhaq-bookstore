import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

// Database connection (ensure this function is defined and correctly connects to your database)
import { connectDB } from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoute.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoute.js";

// Initialize express app
const app = express();

// Determine current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 }));

// Static folder for uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Define routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);

// File upload route
app.post('/api/uploadScreenshot', upload.single('screenshot'), (req, res) => {
  try {
    // Log the uploaded file and other form data
    console.log("Uploaded file:", req.file);
    console.log("Form data:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  } catch (error) {
    console.error("File upload error:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Home route
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my website</h1>`);
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('404 - Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.DEV_MODE} MODE`.bgCyan.white);
});
