import express from 'express';
import AuthRoutes from './src/routes/AuthRoutes.js';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(express.json());

const port =  3000;

app.listen(port, (err) => {
  if (err) {
    console.error("Ocorreu um erro ao tentar iniciar o servidor da aplicação: " + err);
    process.exit(1);
  };

  console.log(`Servidor rodando em: http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.json({ message: "Hello world!" });
});

app.use('/auth', AuthRoutes);


export default app;