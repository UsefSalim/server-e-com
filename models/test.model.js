const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const testSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = model('test', testSchema);
