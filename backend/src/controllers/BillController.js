import BillService from "../services/BillService.js";

class BillController {
    constructor(db) {
        this.billService = new BillService(db);
    }

    async getAllUserBills(req, res) {
        const userId = req.params.id;
        const result = await this.billService.getAllUserBills(userId);
        return res.status(result.status).json(result);
    }

    async getById(req, res) {
        const billId = req.params.id;
        const result = await this.billService.getById(billId);
        return res.status(result.status).json(result);
    }

    async createBill(req, res) {
        const billData = req.body;
        const result = await this.billService.createBill(billData);
        return res.status(result.status).json(result);
    }

    async editBill(req, res) {
        const billId = req.params.id;
        const body = req.body;
        const result = await this.billService.editBill(billId, body);
        return res.status(result.status).json(result);
    }

    async deleteBill(req, res) {
        const billId = req.params.id;
        const result = await this.billService.deleteBill(billId);
        return res.status(result.status).json(result);
    }
}
export default BillController