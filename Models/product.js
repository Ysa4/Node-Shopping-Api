const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const productSchema =new Schema({
    productId: {
        type: String,
        required: true,
        unique: true
      },
    name: {
        type: String,
        required: true,
      },
    price:{
        type: String,
        required: true,
      },
    description:{
        type: String,
        required: true,
      },
      quantity:{
        type: String,
        required: true,
      },
      status:{
        type: String,
        required: true,
      },
      images:{
        type: String,
        required: true,
      },
      createdAt:{ type: String, default: Date.now }

});

module.exports = mongoose.model('product', productSchema);