const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 5 },
  image: { type: String },
  bio: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
