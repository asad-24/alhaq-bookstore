import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
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
import cookieParser from "cookie-parser";
// import orderRouter from "./routes/orderRoute.js"; // Import new order routes

// Initialize express app
const app = express();

// Determine current directory
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 }));

// Static folder for uploaded files (if needed)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);
// app.use("/api/v1/order", orderRouter); // Use the new order routes

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
