const pool = require("../db");

async function migrate() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tb_mensagem (
        id_mensagem SERIAL PRIMARY KEY,
        tx_descricao TEXT NOT NULL
      );
    `);

    await pool.query(`
      INSERT INTO tb_mensagem (tx_descricao) VALUES ('Olá! Esta mensagem veio do servidor 🚀')
      ON CONFLICT DO NOTHING;
    `);

    console.log("✅ Migration executada com sucesso!");
  } catch (err) {
    console.error("❌ Erro ao executar migration:", err.message);
  } finally {
    pool.end();
  }
}

migrate();