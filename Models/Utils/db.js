const mongoose =require('mongoose');


const mongoURL= "mongodb+srv://yeab19:lbgoJeCmq0xXnp9E@cluster0.gsyr1.mongodb.net/shopingDatabase?retryWrites=true&w=majority";
//const mongoURL ="";
const connectDB = async () => {
    try {
      await mongoose.connect(mongoURL, {
        useNewUrlParser: true
      });
  
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;