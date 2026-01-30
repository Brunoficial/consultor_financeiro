class BillRepository {
    constructor(db) {
        this.db = db;
    }

    async findById(id) {
        const [rows] = await this.db.execute("SELECT * FROM bills WHERE id = ?", [id]);
        return rows[0];
    }

    async findAllByUserId(userId) {
        const [rows] = await this.db.execute("SELECT * FROM bills WHERE user_id = ?", [userId]);
        return rows;
    }

    async create(data) {
        const [result] = await this.db.execute("INSERT INTO bills (amount, description, due_date, paid, category, account_type, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)", [data.amount, data.description, data.due_date, data.paid, data.category, data.account_type, data.user_id]);
        return result;
    }

    async update(id, data) {
        const [result] = await this.db.execute("UPDATE bills SET amount = ?, description = ?, due_date = ?, paid = ?, category = ?, account_type = ? WHERE id = ?", [data.amount, data.description, data.due_date, data.paid, data.category, data.account_type, id]);
        return result;
    }

    async delete(id) {
        const [result] = await this.db.execute("DELETE FROM bills WHERE id = ?", [id]);
        return result;
    }
}
export default BillRepository