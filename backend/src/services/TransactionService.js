import TransactionRepository from "../repositories/TransactionRepository.js";

class TransactionService {
    constructor(db) {
        this.transactionRepository = new TransactionRepository(db);
    }

    async getAllUserTransactions(id) {
        try {
            const userId = id
            const transactions = await this.transactionRepository.get_all_user_transactions(userId);
            return {status: 200, data: transactions}
        } catch (error) {
            return { status: 500, message: "Erro interno no servidor " };
        }
    }

    async createTransaction(data) {
        try {
            const transaction = await this.transactionRepository.create_transaction(data);
            return { status: 201, data: transaction };
        } catch (error) {
            return { status: 500, message: "Erro interno no servidor" };
        }
    }

    async editTransaction(id, data) {
        try {
            const transaction = await this.transactionRepository.get_transaction_by_id(id);

            if (!transaction) {
                return { status: 404, message: "Transaction not found" };
            }

            if (transaction.user_id !== data.user_id) {
                return { status: 403, message: "Unauthorized" };
            }

            transaction = await this.transactionRepository.edit_transaction(id, data);
            return { status: 200, data: transaction };
        } catch (error) {
            return { status: 500, message: "Erro interno no servidor" };
        }
    }

    async deleteTransaction(id) {
        try {
            const transaction = await this.transactionRepository.get_transaction_by_id(id);
            if (!transaction) {
                return { status: 404, message: "Transaction not found" };
            }

            if (transaction.user_id !== user_id) {
                return { status: 403, message: "Unauthorized" };
            }

            await this.transactionRepository.delete_transaction(id);
            return { status: 200, message: "Transaction deleted successfully" };
        } catch (error) {
            return { status: 500, message: "Failed to delete transaction" };
        }
    }}
export default TransactionService