import { Router } from "express";
import { getSubscription } from "../controllers/subscription.controller.js";
import { getAllSubscriptions } from "../controllers/subscription.controller.js";


const router = Router()

router.get('/:id', getSubscription)
router.get('/', getAllSubscriptions)

export default router