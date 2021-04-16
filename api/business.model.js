const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
  name_machine: {
    type: String
  },
  data_name: {
    type: Number
  },
  tipe_name: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);