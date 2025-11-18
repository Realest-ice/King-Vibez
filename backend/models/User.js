const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String },
  otpExpires: { type: Date },
  isAdmin: { type: Boolean, default: false }, // only admins can log in
});

module.exports = mongoose.model("User", userSchema);
