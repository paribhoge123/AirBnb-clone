const mongoose = require("mongoose");
const reviews = require("./reviews");
const { ref } = require("joi");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwc2NlbmVyeXxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwc2NlbmVyeXxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60"
        : v,
  },
  price: {
    type: Number,
    required: true,
  },
  location: String,
  country: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
