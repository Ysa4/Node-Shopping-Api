const express = require('express');
const app = express(); 
const cors = require('cors');
const connectDb =require('./Models/Utils/db');
const productRoute = require('./Routes/productRoute');
const cartRoute = require('./Routes/cartRouter');
const userRoute = require('./Routes/userRoute');
const orderRoute = require('./Routes/orderRoute');

app.set('port',process.env.PORT || 8000);
app.use(express.json({extended:false}));
connectDb();
app.use(cors());

app.use('/product',productRoute);
app.use('/cart',cartRoute);
app.use('/user',userRoute);
app.use('/order',orderRoute);

app.listen(app.get('port'),()=> console.log("Server Started running ........"));