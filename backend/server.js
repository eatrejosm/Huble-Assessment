const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to the reviews.json file
const reviewsFilePath = path.join(__dirname, "reviews.json");

// Function to read reviews from reviews.json
const readReviews = () => {
  try {
    const data = fs.readFileSync(reviewsFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading reviews.json:", err);
    return [];
  }
};

// Function to write reviews to reviews.json
const writeReviews = (reviews) => {
  try {
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2));
  } catch (err) {
    console.error("Error writing to reviews.json:", err);
  }
};

// GET route to fetch all reviews
app.get("/api/reviews", (req, res) => {
  const reviews = readReviews();
  res.json(reviews);
});

// POST route to add a new review
app.post("/api/reviews", (req, res) => {
  const { name, email, rating, comment } = req.body;

  // Validate input
  if (!name || !email || !rating || !comment) {
    return res
      .status(400)
      .json({ message: "Please provide name, email, rating, and comment." });
  }

  const newReview = {
    name,
    email,
    rating,
    comment,
    date: new Date().toISOString(),
  };

  // Read current reviews, add the new review, and write back to the file
  const reviews = readReviews();
  reviews.unshift(newReview);
  writeReviews(reviews);

  res.status(201).json({ message: "Review added successfully!", review: newReview });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
