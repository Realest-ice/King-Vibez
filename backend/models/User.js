const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
  code: String,
  expiresAt: Date
}, { _id: false });

const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  name: String,
  role: { type: String, default: "admin" },
  otp: OTPSchema
});

module.exports = mongoose.model('User', UserSchema);
