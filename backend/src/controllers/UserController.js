import UserService from "../services/UserService.js"

class UserController {
    constructor(db) {
        this.userService = new UserService(db)
    }

    async findById(req, res) {
        const id = req.params.id
        const data = await this.userService.findById(id)
        res.status(data.status).json(data)
    }

    async login(req, res) {
        const body = req.body
        const data = await this.userService.login(body)
        res.status(data.status).json(data)
    }

    async register(req, res) {
        const body = req.body
        const data = await this.userService.register(body)
        res.status(data.status).json(data)
    }
}
export default UserController