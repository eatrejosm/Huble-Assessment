const fs = require("fs");
const path = require("path");

const reviewsFilePath = path.join(__dirname, "../data/reviews.json");

// Read review from JSON file
const readReviews = () => {
  try {
    const data = fs.readFileSync(reviewsFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading reviews.json:", err);
    return [];
  }
};

// Write reviews to JSON file
const writeReviews = (reviews) => {
  try {
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2));
  } catch (err) {
    console.error("Error writing to reviews.json:", err);
  }
};
  
// GET all reviews
const getReviews = (req, res) => {
  const reviews = readReviews();
  res.json(reviews);
};
  
// POST new review
const addReview = (req, res) => {
  const { name, email, rating, comment } = req.body;

  if (!name || !email || !rating || !comment) {
    return res.status(400).json({ message: "Please provide all required fields." });
  }

  const newReview = {
    name,
    email,
    rating,
    comment,
    date: new Date().toISOString(),
  };

  const reviews = readReviews();
  reviews.unshift(newReview);
  writeReviews(reviews);

  res.status(201).json({ message: "Review added successfully!", review: newReview });
};
  
module.exports = { getReviews, addReview };