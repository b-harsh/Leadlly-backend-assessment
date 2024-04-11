import express from "express";
import connectDB from "../db";
import userRoutes from "./routes/user.routes";

const app = express();

connectDB();

app.use(express.json());
app.use('/api/users' , userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>console.log(`Server is Running on port ${PORT}`));