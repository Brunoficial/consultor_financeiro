import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error("Ocorreu um erro ao tentar iniciar o servidor da aplicação: " + err);
    process.exit(1);
  };

  console.log(`Servidor rodando em: http://localhost:${port}`);
});

export default app;