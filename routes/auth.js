// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const crypto = require('crypto');

router.post('/send-otp', async (req, res) => {
  const { email, mobile } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiry

  let user = await User.findOne({ $or: [{ email }, { mobile }] });
  if (!user) {
    user = new User({ email, mobile });
  }

  user.otp = otp;
  user.otpExpiry = expiry;
  await user.save();

  // Send OTP via email/SMS here (use nodemailer or SMS API like Twilio)
  console.log("OTP:", otp); // 🔁 simulate sending

  res.json({ message: 'OTP sent successfully' });
});
