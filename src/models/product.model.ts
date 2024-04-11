import mongoose , {Schema} from "mongoose";

export interface Products extends Document{
   name:string;
   image:string;
   price:number;
   stock:number;
   description:string;
}

const productSchema:Schema =new Schema({
    name:{type:String ,required:true },
    image:{type:String , required:true},
    description:{type:String ,required:true },
    price:{type:Number ,required:true },
    stock:{type:Number ,required:true },
})


export default mongoose.model<Products>('Product', productSchema);