import { Router } from 'express';
import { createTransaction, getTransactions } from '../controllers/transaction.controller.js';

const router = Router();

router.post('/create_transaction', createTransaction);
router.get('/get_transactions/:uid', getTransactions);

export default router;
