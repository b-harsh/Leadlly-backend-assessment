import express from 'express';
import { adminuthentication } from "../middleware/admin.auth.middleware";
import ProductController from '../controllers/product.controller';


const router =express.Router();
router.post('./addproduct', adminuthentication ,ProductController.createProduct );
router.get('/products',ProductController.getProducts);

export default router;