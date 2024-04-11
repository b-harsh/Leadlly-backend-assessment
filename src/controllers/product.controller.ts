import axios from 'axios';
import productModel from '../models/product.model';

const baseUrl = "http://localhost:3000/api";

class ProductController{
    static async createProduct(req, res){
        try{
            const {name , image , price , stock , description}= req.body;
            const response = await axios.post(`${baseUrl}/addprduct` , {name , image , price , stock , description},{
                headers:{Authorization:`Bearer ${req.headers.authorization}`}
             });
            res.status(201).json(response.data);
        }
        catch (error){
            res.status(400).message(error.message);
        }
    }

    static async getProducts (req, res){
        try{
          const products =  await productModel.find();
          res.json(products);
        }
        catch (error){
            res.status(400).message(error.message);
        }
    }
}

export default ProductController;