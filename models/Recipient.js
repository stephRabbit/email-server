// Subdocument collection only useful as child to to Survey
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema for each surveys
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;