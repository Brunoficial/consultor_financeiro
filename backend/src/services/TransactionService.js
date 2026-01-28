import TransactionRepository from "../repositories/TransactionRepository.js";

class TransactionService {
    constructor(db) {
        this.transactionRepository = new TransactionRepository(db);
    }

    async getAllUserTransactions(req, res) {
        const userId = req.body.user_id;
        const transactions = await this.transactionRepository.get_all_user_transactions(userId);
        return res.status(200).json(transactions);
    }

    async createTransaction(req, res) {
        const data = req.body;

        const transaction = await this.transactionRepository.create_transaction(data);
        return json({ message: "Transaction created successfully", transaction });
    }

    async editTransaction(req, res) {
        const { id } = req.params;
        const data = req.body;

        const transaction = await this.transactionRepository.get_transaction_by_id(id);

        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        if (transaction.user_id !== data.user_id) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        return await this.transactionRepository.edit_transaction(id, data);
    }

    async deleteTransaction(req, res) {
        const { id } = req.params;
        const { user_id } = req.body;

        const transaction = await this.transactionRepository.get_transaction_by_id(id);

        try {
            if (!transaction) {
                return res.status(404).json({ message: "Transaction not found" });
            }

            if (transaction.user_id !== user_id) {
                return res.status(403).json({ message: "Unauthorized" });
            }

            if (await this.transactionRepository.delete_transaction(id)) {
                return { message: "Transaction deleted successfully" };
            } else {
                return res.status(500).json({ message: "Failed to delete transaction" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Failed to delete transaction" });
        }
    }}
export default TransactionService