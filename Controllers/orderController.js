const  Order = require('../Models/order'); 

const { v4: uuidv4 } = require('uuid');


exports.makeOrder=(req,res,next)=>{
    const body =req.body;
    const newOrder= new Order({
        orderId:uuidv4(),
        orderBy:body.orderBy,
        orderPrice:body.orderPrice,
        orderProducts:body.orderProducts
    });
    newOrder.save(); 
 res.json(newOrder);
};


exports.getOrders = async (req,res,next)=>{
    const id = req.params.id;
    const returnedResult= await  Order.find({orderBy:id});
    res.json(returnedResult);
   };
   exports.getAllOrders = async (req,res,next)=>{
    const returnedResult= await  Order.find({});
    res.json(returnedResult);
   };

exports.getSingleOrder= async (req,res,next)=>{
    const id = req.params.id;
    const returnedResult= await  Order.findOne({orderId:id},req.body,{
        returnOriginal: false
      });
    res.json(returnedResult);
};

exports.deleteOrder= async (req,res,next)=>{
    const id = req.params.id;
    const returnedResult= await  Order.deleteOne({orderId:id});
    res.json(returnedResult);
};
