import UserRepository from "../repositories/UserRepository.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

class UserService {
  constructor(db) {
    this.userRepository = new UserRepository(db);
  }

  async login(data) {
    const email = data.email
    const password = data.password

    try {
      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        return {status: 404, message: "Usuário não encontrado"}
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return {status: 401, message:"Senha inválida"}
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return {status: 200, data: token}

    } catch (error) {
      console.log(error)
      return {status: 500,message:"Erro interno no servidor"}
    }
  }

  async register(data) {
    const name = data.name
    const email = data.email
    try {
      
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const newUser = await this.userRepository.create({
        name,
        email,
        password: hashedPassword,
      });

      return {status: 200, data: newUser, message: "Usuário registrado com sucesso"}
    } catch (error) {
      console.log(error)
      return {status: 500, message: "Erro interno ocorreu no servidor"}
    }
  }

  async findById(id) {
    try {
      const user = await this.userRepository.findById(id)
      if (!user) {
        return {status: 404, message:"Usuário não econtrado"}
      }

      return {status:200, data: user}
    } catch(error) {
      console.log(error)
      return {status:500, message: "Erro interno no servidor"}
    }
  } 
}
export default UserService