import BillRepository from "../repositories/BillRepository.js";

class BillService {
    constructor(db) {
        this.billRepository = new BillRepository(db);
    }

    async getAllUserBills(id) {
        try {
            const bills = await this.billRepository.findAllByUserId(id);
            return {status: 200, data: bills}
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno no servidor " };
        }
    }

    async getById(id) {
        try {
            const bill = await this.billRepository.findById(id);
            if (!bill) {
                return { status: 404, message: "Bill not found" };
            }
            return { status: 200, data: bill };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Erro interno no servidor" };
        }
    }

    async createBill(body) {
        try {
            await this.billRepository.create(body);
            return { status: 200, message: "Conta criada com sucesso" };
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno no servidor" };
        }
    }

    async editBill(id, data) {
        try {
            const bill = await this.billRepository.findById(id);

            if (!bill) {
                return { status: 404, message: "Bill not found" };
            }

            if (bill.user_id != data.user_id) {
                return { status: 403, message: "Sem autorização" };
            }

            await this.billRepository.update(id, data);
            return { status: 200, message: "Conta editada com sucesso" };
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno no servidor" };
        }
    }

    async deleteBill(id) {
        try {
            const bill = await this.billRepository.findById(id);
            if (!bill) {
                return { status: 404, message: "Conta não encontrada" };
            }
            
            /*
            if (bill.user_id !== user_id) {
                return { status: 403, message: "Sem autorização" };
            }
            */

            await this.billRepository.delete(id);
            return { status: 200, message: "Conta deletada com sucesso" };
        } catch (error) {
            console.log(error)
            return { status: 500, message: "Erro interno no servidor" };
        }
    }}
export default BillService