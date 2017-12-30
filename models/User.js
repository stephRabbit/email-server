const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema for each individual user record
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// Model class - users collection
mongoose.model('users', userSchema);