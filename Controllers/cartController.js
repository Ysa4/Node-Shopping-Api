const  Cart = require('../Models/cart');
const { v4: uuidv4 } = require('uuid');


exports.addToCart=(req,res,next)=>{
    const body =req.body;
    const newCartItem= new Cart({
        cartId:uuidv4(),
        cartProducts:body.cartProducts,
        cartPrice:body.cartPrice,
        cartOwner:body.cartOwner
    });
    newCartItem.save(); 
 res.json(newCartItem);
};

exports.getCart = async (req,res,next)=>{
    const returnedResult= await  Cart.findOne({cartId:req.params.id})
    res.json(returnedResult);

};


exports.updateCart= async (req,res,next)=>{
    const id = req.params.id;
    const returnedResult= await  Cart.findOneAndUpdate({cartId:id},req.body,{
        returnOriginal: false
      });
    res.json(returnedResult);
};

exports.deleteCart= async (req,res,next)=>{
    const id = req.params.id;
    const returnedResult= await  Cart.deleteOne({cartId:id});
    res.json(returnedResult);
};
