// Calling the "mongoose" package
const mongoose = require("mongoose");

// Creating a Schema for uploaded files
const fileSchema = new mongoose.Schema({
  name: String,
  badge: String,
  price: Number,
  desc: String,
  image: String,
  status: { type: Boolean, default: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model("Product", fileSchema);