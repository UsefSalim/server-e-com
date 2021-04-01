const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: 'categorie',
    required: true,
  },
});

module.exports = model('product', productSchema);
