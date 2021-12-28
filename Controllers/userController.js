const  User = require('../Models/user'); 

const { v4: uuidv4 } = require('uuid');


exports.signup=(req,res,next)=>{
    const body =req.body;
    const newOrder= new User({
        userId:uuidv4(),
        firstName:body.firstName,
        lastName:body.lastName,
        userName:body.userName,
        password:body.password,
        email:body.email,
        phoneNumber:body.phoneNumber,
        address:body.address,
    });
    newOrder.save(); 
 res.json(newOrder);
};


exports.login = async (req,res,next)=>{
    const body = req.body;
    const returnedResult= await  User.find({userName:body.userName,password:body.password});
    res.json(returnedResult);
   };
