
const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const cartSchema =new Schema({
    cartId: {
        type: String,
        required: true,
      },
      cartProducts: {
        type: Array,
        required: true,
      },
      cartPrice:{
        type: String,
        required: true,
      },
      cartOwner:{
        type: String,
        required: true,
      },
      createdAt:{ type: String, default: Date.now }

});

module.exports = mongoose.model('cart', cartSchema);