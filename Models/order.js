
const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const orderSchema =new Schema({
    orderId: {
        type: String,
        required: true,
      },
      orderBy: {
        type: String,
        required: true,
      },
      orderPrice:{
        type: String,
        required: true,
      },
      orderProducts:{
        type: Array,
        required: true,
      },
      createdAt:{ type: String, default: Date.now }

});

module.exports = mongoose.model('order', orderSchema);