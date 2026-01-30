class TransactionsRepository {
    constructor(db) {
        this.db = db;
    }

    async getAllByUserId(user_id) {
        const [rows] = await this.db.execute("SELECT * FROM transactions WHERE user_id = ?", [user_id]);
        return rows;
    };

    async findById(id) {
        const [rows] = await this.db.execute("SELECT * FROM transactions WHERE id = ?", [id]);
        return rows[0];
    }

    async create(data) {
        const [result] = await this.db.execute("INSERT INTO transactions (description, date, amount, type, category, account_type, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)", 
        [data.description, data.date, data.amount, data.type, data.category, data.account_type, data.user_id]);
        return result;
    };

    async edit(id, data) {
        const [result] = await this.db.execute("UPDATE transactions SET description = ?, date = ?, amount = ?, type = ?, category = ?, account_type = ? WHERE id = ?",
            [data.description, data.date, data.amount, data.type, data.category, data.account_type, id]);
        return result;
    }

    async delete(id) {
        const [affectedRows] = await this.db.execute("DELETE FROM transactions WHERE id = ?", [id]);
        return affectedRows;
    }
}
export default TransactionsRepository