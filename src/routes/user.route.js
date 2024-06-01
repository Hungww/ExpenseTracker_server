import { Router } from "express";
import { createUser, getUserById, updateUserbyId } from "../controllers/user.controller.js";



const router = Router()

router.post('/create_user', createUser)
router.get('/get_user/:uid', getUserById)
router.put('/update_user/:uid', updateUserbyId)

export default router