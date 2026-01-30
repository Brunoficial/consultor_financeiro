import express from 'express';
import userRouter from './src/routes/UserRouter.js';
import transactionRouter from './src/routes/TransactionRouter.js';
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

app.use('/user', userRouter);
app.use('/transactions', transactionRouter);

export default app;