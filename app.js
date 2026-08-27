const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderHub";

main()
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "Villa",
    description: "near the beach",
    price: 12000,
    location: "Nagpur",
    country: "India",
  });

  await sampleListing.save();
  console.log("sample saved");
  res.send("success testing");
});

app.get("/", (req, res) => {
  res.send("it is working fine");
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
