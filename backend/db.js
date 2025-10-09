const { Pool } = require("pg");

const banco = new Pool({
  user: "USUARIO",
  host: "localhost",
  database: "BANCO",
  password: "SENHA",
  port: 5432,
});

module.exports = banco;