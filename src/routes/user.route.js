import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";



const router = Router()

router.post('/create_user', createUser)
export default router