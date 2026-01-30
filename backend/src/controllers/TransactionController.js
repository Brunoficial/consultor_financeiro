import TransactionService from "../services/TransactionService.js";

class TransactionController {
    constructor(db) {
        this.transactionService = new TransactionService(db);
    }

    async getAllUserTransactions(req, res) {
        const userId = req.params.id;
        const result = await this.transactionService.getAllUserTransactions(userId);
        return res.status(result.status).json(result);
    }

    async createTransaction(req, res) {
        const transactionData = req.body;
        const result = await this.transactionService.createTransaction(transactionData);
        return res.status(result.status).json(result);
    }

    async editTransaction(req, res) {
        const transactionId = req.params.id;
        const transactionData = req.body;
        const result = await this.transactionService.editTransaction(transactionId, transactionData);
        return res.status(result.status).json(result);
    }

    async deleteTransaction(req, res) {
        const transactionId = req.params.id;
        const result = await this.transactionService.deleteTransaction(transactionId);
        return res.status(result.status).json(result);
    }
}

export default TransactionController;
