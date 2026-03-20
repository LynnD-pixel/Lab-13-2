import "dotenv/config";
import express from 'express'
import connectDB from "./db/connection.js";
import bookRoutes from "./routes/bookRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();
// Middleware
app.use(express.json());
// Routes
app.use("/api/books", bookRoutes);
// Basic test route
app.get("/", (req, res) => {
  res.send("Digital Bookshelf API is running");
});
// Start server
app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});