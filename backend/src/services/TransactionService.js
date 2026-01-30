import TransactionRepository from "../repositories/TransactionRepository.js";

class TransactionService {
    constructor(db) {
        this.transactionRepository = new TransactionRepository(db);
    }

    async getAllUserTransactions(id) {
        try {
            const userId = id
            const transactions = await this.transactionRepository.getAllByUserId(userId);
            return {status: 200, data: transactions}
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno no servidor " };
        }
    }

    async getByTransactionById(id) {
        try {
            const transaction = await this.transactionRepository.findById(id);
            if (!transaction) {
                return { status: 404, message: "Transação não encontrada" };
            }
            return { status: 200, data: transaction };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Erro interno no servidor" };
        }
    }

    async createTransaction(body) {
        try {
            const data = await this.transactionRepository.create(body);
            return { status: 200, message: "Transação criada com sucesso" };
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno no servidor" };
        }
    }

    async editTransaction(id, data) {
        try {
            const transaction = await this.transactionRepository.findById(id);

            if (!transaction) {
                return { status: 404, message: "Transição não encontrada" };
            }

            if (transaction.user_id !== data.user_id) {
                return { status: 403, message: "Sem autorização" };
            }

            await this.transactionRepository.edit(id, data);
            return { status: 200, message: "Transação editada com sucesso" };
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno no servidor" };
        }
    }

    async deleteTransaction(id) {
        try {
            const transaction = await this.transactionRepository.findById(id);
            if (!transaction) {
                return { status: 404, message: "Transição não encontrada" };
            }

            /*
            if (transaction.user_id !== user_id) {
                return { status: 403, message: "Sem autorização" };
            } 
            */

            await this.transactionRepository.delete(id);
            return { status: 200, message: "Transação deletada com sucesso" };
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno no servidor" };
        }
    }}
export default TransactionService