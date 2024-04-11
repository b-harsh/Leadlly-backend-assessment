import express from "express";
import UserController from "../controllers/user.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

router.post('./register' , UserController.register);
router.post('./login' , UserController.login);
router.post('./logout' ,authenticate, UserController.logout);
router.post('./edit' , authenticate , UserController.edit);

export default router;





