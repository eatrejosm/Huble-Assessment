const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/config");
const reviewsRoutes = require("./routes/reviewsRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/reviews", reviewsRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));