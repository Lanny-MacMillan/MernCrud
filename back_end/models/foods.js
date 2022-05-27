const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const Foods = mongoose.model('Foods', foodSchema);
module.exports = Foods;
