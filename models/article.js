const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = Schema(
  {
    type: { type: String, required: true, default: "File" },
    title: { type: String },
    description: { type: String },
    path: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);