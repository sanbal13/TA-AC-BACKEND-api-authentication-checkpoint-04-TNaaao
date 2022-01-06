const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  slug: { type: String, required: true },
  description: String,
  tags: [{ type: String }],
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
}, { timestamps: true });

module.exports = questionSchema;
