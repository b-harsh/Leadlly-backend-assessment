import { Request , Response , NextFunction } from "express";
const jwt = require('jsonwebtoken');

export const adminuthentication =(req:Request , res:Response , next:NextFunction)=>{
    const token = req.headers['authorization'];
    if(!token){
      return res.status(401).json({message:'No token required'});
    }
    else{
     jwt.verify(token , 'secret' , (err ,decoded)=>{
        if(err){
            return res.status(403).json({message:"failed to authenticate token"});
        }
         if(!decoded.isAdmin){
            res.status(403).json({messgae:'User is not reacognized as admin'});
        }
     })
    }
}

