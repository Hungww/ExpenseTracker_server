import express from 'express';
import { createPromotion, getPromotion, getAllPromotions } from '../controllers/promotions.controller.js';

const router = express.Router();

router.post('/', createPromotion);
router.get('/:id', getPromotion);
router.get('/', getAllPromotions);

export default router;