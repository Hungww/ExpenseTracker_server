import Transaction from "../models/transaction.model.js";
async function createNewTransaction(data) {
    return await Transaction.add(data);
}

async function getTransactionById(id) {
    return await Transaction.getById(id);
}

export { createNewTransaction, getTransactionById };
