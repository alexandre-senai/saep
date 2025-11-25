const express = require("express");
const cors = require("cors");

const banco = require("./db");

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

const PORTA = 5000;
servidor.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});

servidor.get("/mensagem", (requisicao, resposta) => {
  var objeto = {
    'mensagem': 'ola mundo'
  };

  resposta.json(objeto);
});
