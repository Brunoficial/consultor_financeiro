import express from 'express';

const app = express();
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

export default app;