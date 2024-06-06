import { createNewTransaction, getTransactionById } from "../services/transaction.service.js";

async function createTransaction(req, res) {
    try {
        const data = req.body;
        const transaction = await createNewTransaction(data);
        res.status(200).send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getTransactions(req, res) {
    try {
        const uid = req.params.uid;
        const transactions = await getTransactionById(uid);
        res.status(200).send(transactions);
    } catch (error) {
        res.status(500).send(error);
    }
}

export { createTransaction, getTransactions };
