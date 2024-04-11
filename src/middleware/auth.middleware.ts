import { Request , Response , NextFunction } from "express";
import jwt from "jsonwebtoken";
import {jwt_secret} from "../config";

export const authenticate = (req:Request , res:Response , next:NextFunction)=>{
  const token = req.headers.authorization?.split(' ')[1];

  if(token){
    jwt.verify(token, jwt_secret , (err, decoded)=>{
        if(err){
            return res.status(400).json({message:"Unauthorized"})
        }
        else{
            req["user"] = decoded;
            next();
        }
    })
  }
  else{
    res.status(400).json({message:'Unauthorized'});
  }
}
