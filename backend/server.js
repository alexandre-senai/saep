const express = require("express");
const cors = require("cors");

const banco = require("./db");

const servidor = express();
servidor.use(cors());
servidor.use(express.json());


const PORTA = 80;

const path = require("path");
servidor.use(express.static(path.join(__dirname, "public")));
servidor.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

servidor.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});

servidor.get("/mensagem", (requisicao, resposta) => {
  var objeto = {
    'mensagem': 'ola mundo'
  };


   const resultado =  banco.query('SELECT * FROM mensagem');

  resposta.json(objeto.mensagem = resultado);
});