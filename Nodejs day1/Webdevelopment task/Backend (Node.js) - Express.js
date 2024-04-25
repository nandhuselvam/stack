// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 5000;

// Dummy user database
const users = [
  { id: 1, email: 'user@example.com', password: 'password123' },
  // Add more users as needed
];

app.use(bodyParser.json());

// Route for sending password reset email
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Generate random token
  const token = crypto.randomBytes(20).toString('hex');
  user.resetToken = token;

  // Send email with reset link
  const transporter = nodemailer.createTransport({
    // Configure SMTP details
  });

  const mailOptions = {
    from: 'your@example.com',
    to: user.email,
    subject: 'Password Reset',
    html: `<p>Click <a href="http://localhost:3000/reset-password/${token}">here</a> to reset your password</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent' });
  });
});

// Route for resetting password
app.post('/reset-password', (req, res) => {
  const { token, newPassword } = req.body;
  const user = users.find(user => user.resetToken === token);

  if (!user) {
    return res.status(404).json({ message: 'Invalid or expired token' });
  }

  // Update user's password
  user.password = newPassword;
  delete user.resetToken;

  res.status(200).json({ message: 'Password updated successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
