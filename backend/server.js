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


servidor.get('/exbirCarroBanco', async (requisicao, resposta) => {
  
  //EXECUTA O QUE ESTA ENTRE CHAVES E SE DER ERRO EXECUTA O CATH
  try {
    const resultadoBanco = await banco.query("SELECT * FROM tb_carro");
    return resposta.json({ mensagem: resultadoBanco.rows }); // Envia e encerra
  
  //SE DE ERRO
  } catch (erro) {
    
    //ESCREVE O ERRO NO LOG DO SERVIDOR
    console.log(erro);


    //RETORNA PARA O FRONT END O STATUS 500
    return resposta.status(500).json({ mensagem: "Erro ao buscar carros." });
  }
});

servidor.get("/teste", async (requisicao, resposta) => {

  //PARAMETROS SOMENTE DO METODO GET
  //PEGA OS PARAMETROS ENVIADOS NA REQUISICAO DO FRONT END
  const {nome, codigo} = requisicao.query;

  try {
    const result = await banco.query("SELECT * FROM tb_mensagem ORDER BY id_mensagem ASC");
    resposta.json(result.rows);
  } catch (err) {
    resposta.status(500).json({ error: err.message });
  }
});

servidor.get("/mensagem", (requisicao, resposta) => {
  var objeto = {
    'mensagem': 'ola mundo'
  };

  resposta.json(objeto);
});


servidor.get("/mostrarVariasPessoas", (requisicao, resposta) => {

  //QUERY SERIA ALGO COMO BUSCA O PARAMETRO FILTRO DENTRO DA REQUISICAO
  var { filtro } = requisicao.query;

  var carros = [{
    "nome": "alexandre",
    "ano": "25",
    "documento": 123
  },
  {
    "nome": "JOAQUIN",
    "ano": "50",
    "documento": 456
  },
  {
    "nome": "POLENTA",
    "ano": "99999",
    "documento": 789
  }];


  resposta.json(carro);
});