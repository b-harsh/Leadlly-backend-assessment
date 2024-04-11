import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const mongoURL = 'mongodb+srv://<bajaj>:<habanelame>@cluster0.b3d6bla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(mongoURL);
        console.log('MONGODB connected');
     }
    catch (err){
      console.error(err.message);
      process.exit(1);
    }
};

export default connectDB;