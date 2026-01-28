import UserRepository from "../repositories/UserRepository.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

class AuthService {
  constructor(db) {
    this.UserRepository = new UserRepository(db);
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await this.UserRepository.findByEmail(email);

      if (!user) {
        return res.status(401).json({ message: "Usuário com esse e-mail não encontrado." });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({ message: "Senha inválida." });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return res.json({ token: token });

    } catch (error) {
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }

  async register(req, res) {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await this.UserRepository.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({ message: "Usuário registrado com sucesso." });
    } catch (error) {
      console.error("Erro ao realizar registro:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}
export default AuthService