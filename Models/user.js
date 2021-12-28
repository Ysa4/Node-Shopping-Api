const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const userSchema =new Schema({
    userId: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName:{
        type: String,
        required: true,
      },
      userName:{
        type: String,
        required: true,
      },
      password:{
        type: String,
        required: true,
      },
      email:{
        type: String,
        required: true,
      },
      phoneNumber:{
        type: String,
        required: true,
      },
      address:{
        type: Object,
        required: true,
      },
      createdAt:{ type: String, default: Date.now }

});

module.exports = mongoose.model('user', userSchema);