const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
// const { merge } = require("./listing");
const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");
const review = require("../models/reviews.js");

//Add Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

//Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;
