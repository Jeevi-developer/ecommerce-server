const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  mobile: String,
  otp: String,
  otpExpiry: Date,
});

module.exports = mongoose.model('User', userSchema);