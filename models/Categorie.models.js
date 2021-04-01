const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const categorieSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  souscategories: {
    type: [String],
    unique: true
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product',
      default: null,
    },
  ],
});

module.exports = model('categorie', categorieSchema);
