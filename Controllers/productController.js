const  Product = require('../Models/product'); 


exports.addProudct=(req,res,next)=>{
    const body =req.body;
    const newProduct = new Product({
        productId:body.productId,
        name:body.name,
        price:body.price,
        description:body.description,
        quantity: body.quantity,
        status:body.status,
        images:body.images
    });
 newProduct.save() 
 res.json(newProduct);
};
exports.getProduct = async (req,res,next)=>{
    const returnedResult= await  Product.findOne({productId:req.params.id})
    res.json(returnedResult);

};
exports.getProducts = async (req,res,next)=>{
    const returnedResult= await  Product.find({});
    res.json(returnedResult);
   };

exports.updateProudct= async (req,res,next)=>{
    const id = req.params.id;
    const returnedResult= await  Product.findOneAndUpdate({productId:id},req.body,{
        returnOriginal: false
      });
    res.json(returnedResult);
};

exports.deleteProudct= async (req,res,next)=>{
    const id = req.params.id;
    const returnedResult= await  Product.deleteOne({productId:id});
    res.json(returnedResult);
};