class UserRepository {
    constructor(db) {
        this.db = db;
    }

    async findByEmail(email) {
        const [rows] = await this.db.execute("SELECT * FROM users WHERE email = ?", [email]);
        return rows[0];
    }

    async create(userData) {
        const [result] = await this.db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [userData.name, userData.email, userData.password]);
        return { id: result.insertId, ...userData };
    }
}

export default UserRepository;
