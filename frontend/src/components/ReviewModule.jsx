import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import axios from "axios";

const ReviewModule = () => {
  const [isVisible, setIsVisible] = useState(false); // Modal visibility state
  const [reviews, setReviews] = useState([]); // Review list
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  }); // Form data
  const [hoveredStars, setHoveredStars] = useState(0); // Hover effect for stars
  const [error, setError] = useState(null); // Error handling
  const [loading, setLoading] = useState(false); // Loading state
  const [expandedIndices, setExpandedIndices] = useState([]); // Tracks expanded comments

  // Fetch reviews on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/reviews");
        setReviews(response.data);
      } catch {
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Toggle modal visibility
  const toggle_on = () => {
    setFormData({ name: "", email: "", rating: 0, comment: "" }); // Reset form
    setIsVisible(true);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comment || !formData.rating) {
      alert("Please complete all fields!");
      return;
    }

    try {
      const newReview = { ...formData, date: new Date().toISOString() };
      await axios.post("http://localhost:5000/api/reviews", newReview);
      setReviews([newReview, ...reviews]);
      setIsVisible(false); // Close modal
      setFormData({ name: "", email: "", rating: 0, comment: "" }); // Reset form
    } catch {
      alert("Failed to submit your review.");
    }
  };

  // Toggle expand/collapse of comments
  const toggleExpand = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-4 container mx-auto" role="region" aria-label="Customer Reviews Section">
      <h3 className="text-2xl font-bold m-8 yb-4 text-center">Customer Reviews</h3>

      {/* Show Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : reviews.length > 0 ? (
          reviews.map((review, index) => {
            const isExpanded = expandedIndices.includes(index);
            const maxCharLimit = 170; // Truncate limit
            const truncatedComment =
              review.comment.length > maxCharLimit && !isExpanded
                ? `${review.comment.slice(0, maxCharLimit)}...`
                : review.comment;

            return (
              <div
                key={index}
                className="p-0 border rounded-lg shadow-md flex flex-col h-96 overflow-hidden"
                role="reviewcard"
                aria-label={`Review by ${review.name}`}
              >
                <h4 className="font-bold text-lg bg-blue-500 p-6 text-center">{review.name}</h4>
                <span className="text-md text-gray-500 mt-5 py-1 px-5 bg-grey-500">{review.email}</span>
                <span className="text-md text-gray-500 px-5 bg-grey-500">
                  {new Date(review.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <div className="flex justify-center" aria-label={`Rating: ${review.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-5xl ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      aria-label={`Star ${i + 1}`}
                    >
                      ✭
                    </span>
                  ))}
                </div>
                <p className="overflow-auto px-5 mt-2 scrollbar-thin">
                  <p className="break-words" aria-label={`Comment by ${review.name}`}>{truncatedComment}</p>
                  {review.comment.length > maxCharLimit && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-blue-500 hover:underline self-start flex pb-2"
                        name="read"
                        id="read"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    </div>
                  )}
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-center" role="status">No reviews available.</p>
        )}
      </div>

      {/* Button to Open Modal */}
      <Button onClick={toggle_on} className="mt-10 w-full bg-green-500 text-1.5xl p-5">
        Add a Review
      </Button>

      {/* Modal */}
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            <h4 className="text-lg font-bold mb-4 text-center">Add a Review</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                maxLength={20}
                minLength={5}
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full mb-4 p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                maxLength={30}
                minLength={5}
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full mb-4 p-2 border rounded"
                required
              />
              <div className="mb-4">
                <label for="rating" className="block mb-2">Rating:</label>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-3xl ${
                        i < (hoveredStars || formData.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      } cursor-pointer`}
                      onMouseEnter={() => setHoveredStars(i + 1)}
                      onMouseLeave={() => setHoveredStars(0)}
                      onClick={() => setFormData({ ...formData, rating: i + 1 })}
                    >
                      ✭
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Your Comment"
                  maxLength={3000}
                  minLength={10}
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="block w-full p-2 border rounded"
                  required
                />
                <p className="text-sm p-0 mb-4 mr-3 text-right">min:10, max:3000 letters</p>
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="mr-2 bg-green-500" id="submit_btn" name="submit_btn">
                  Submit
                </Button>
                <Button onClick={() => setIsVisible(false)} className="bg-red-500" id="cancel" name="cancel_btn">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewModule;
