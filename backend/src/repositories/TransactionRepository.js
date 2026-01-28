class TransactionsRepository {
    constructor(db) {
        this.db = db;
    }

    async get_all_user_transactions(user_id) {
        const [rows] = await this.db.execute("SELECT * FROM transactions WHERE user_id = ?", [user_id]);
        return rows;
    };

    async create_transaction(data) {
        const [result] = await this.db.execute("INSERT INTO transactions (description, date, amount, type, category, account_type, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)", 
        [data.description, data.date, data.amount, data.type, data.category, data.account_type, data.user_id]);
        return result;
    };

    async edit_transaction(id, data) {
        const [result] = await this.db.execute("UPDATE transactions SET description = ?, date = ?, amount = ?, type = ?, category = ?, account_type = ? WHERE id = ?",
            [data.description, data.date, data.amount, data.type, data.category, data.account_type, id]);
        return result;
    }

    async delete_transaction(id) {
        const [affectedRows] = await this.db.execute("DELETE FROM transactions WHERE id = ?", [id]);
        return affectedRows;
    }
}
export default TransactionsRepository