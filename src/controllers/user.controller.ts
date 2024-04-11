import axios from "axios";
import User from "../models/user.model";
import bcrypt from 'bcryptjs';

const baseUrl = "http://localhost:3000/api/users";

const saltRounds =10;
class UserController{
    static async register(req, res){
        try{
          const {username , email , password} = req.body;
          const hashedpass = await bcrypt.hash(password, saltRounds);
          const response = await axios.post(`${baseUrl}/register` , {username,email,hashedpass});
          res.status(201).json(response.data);
        }
        catch (error){
          res.status(500).json({error:error.messgae});
        }
    }   


    static async login(req , res){
        try{
            const {email,password} = req.body;
            const response = await axios.post(`${baseUrl}/login` , {email,password});
            res.json(response.data);
        }
        catch (error){
            res.status(500).json({error:error.message});
        }
    }

    static async logout(req, res){
      try{
        const response = await axios.post(`${baseUrl}/logout`,{},{
            headers:{Authorization:`Bearer ${req.headers.authorization}`}
        });
        res.json(response.data);
      }
      catch (error){
        res.status(500).json({error:error.message});
      }
    }

    static async edit(req, res){
        try{
          const user_Id = req.body;
          const response = await axios.put(`${baseUrl}/edit/${user_Id}` , req.body , {
             headers:{Authorization:`Bearer ${req.headers.authorization}`}
          });
          res.json(response.data);
        }
        catch (error){
           res.status(500).json({error:error.message});
        }
    }
}

export default UserController;