# Projeto Backend e Frontend

## INSTALAÇÃO

### Backend

1. Acesse o diretório do projeto backend.
2. Execute o comando abaixo para instalar as dependências:

    ```bash
    npm install
    ```

3. Acesse o arquivo `db.js` e configure o seu banco de dados. Exemplo:

    ```javascript
    const banco = new Pool({
      user: "USUARIO",
      host: "localhost",
      database: "BANCO",
      password: "SENHA",
      port: 5432,
    });
    ```

### Frontend

1. Acesse o diretório do projeto frontend.
2. Execute o comando abaixo para instalar as dependências:

    ```bash
    npm install
    ```

---

## Documentação Backend

### Roteamento com Express

1. **Exemplo de Requisição GET** - Listar usuários
   - Lembre-se que em requisições GET, usa-se `req.query` para passagem de parâmetros.

    ```javascript
    router.get("/usuarios", async (req, res) => {
      const id = req.query.id;  // Acessa o parâmetro 'id' da URL

      const result = await db.query("SELECT * FROM usuarios ORDER BY id");
      res.json(result.rows);
    });
    ```

2. **Exemplo de Requisição POST** - Criar novo usuário
   - Lembre-se que em requisições POST, usa-se `req.body` para passagem de parâmetros.

    ```javascript
    router.post("/adicionar", async (req, res) => {
      const { nome } = req.body;  // Acessa o parâmetro 'nome'

      const result = await db.query(
        "INSERT INTO usuarios (nome) VALUES ($1) RETURNING *",
        [nome]
      );

      res.json(result.rows[0]);
    });
    ```

3. **Atualizar Usuário** - Atualizar um usuário específico

    ```javascript
    router.put("/usuario:id", async (req, res) => {
      const { nome } = req.body;
      const { id } = req.params;

      const result = await db.query(
        "UPDATE usuarios SET nome = $1 WHERE id = $2 RETURNING *",
        [nome, id]
      );
      res.json(result.rows[0]);
    });
    ```

4. **Deletar Usuário** - Deletar um usuário pelo ID

    ```javascript
    router.delete("/usuario:id", async (req, res) => {
      const { id } = req.params;

      await db.query("DELETE FROM usuarios WHERE id = $1", [id]);

      res.json({ message: "Usuário deletado." });
    });
    ```

---

## Documentação Banco de Dados

1. **Criar Database**

    ```sql
    CREATE DATABASE meubanco;
    ```

2. **Criar Tabela** - Exemplo de uso de `SERIAL` para valores sequenciais.

    ```sql
    CREATE TABLE usuarios (
      id SERIAL PRIMARY KEY, 
      nome VARCHAR(100) NOT NULL
    );
    ```

3. **Exemplo de Chave Estrangeira**

    ```sql
    CREATE TABLE ordem (
      id SERIAL PRIMARY KEY,
      usuario_id INTEGER NOT NULL,
      total NUMERIC(10,2),

      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );
    ```

4. **Inserir Novo Usuário**

    ```sql
    INSERT INTO usuarios (nome) VALUES ('Maria'), ('João');
    ```

5. **Atualizar Informações de um Usuário**

    ```sql
    UPDATE usuarios SET nome = 'João da Silva' WHERE id = 1;
    ```

6. **Remover um Usuário**

    ```sql
    DELETE FROM usuarios WHERE id = 2;
    ```

---

## Documentação Frontend

1. Acesse o diretório do projeto front-end.
2. Execute o comando abaixo para instalar as dependências:

    ```bash
    npm install
    ```

### Requisição

1. **Exemplo de Requisição GET com Parâmetro**

    ```javascript
      const categoria = 'eletronicos';
      const precoMaximo = 1000;

      fetch(`http://localhost:4000/produto?categoria=${categoria}&preco_max=${precoMaximo}`)
      .then(response => response.json())  // Converte a resposta em JSON

      .then(respostaBackend => console.log(respostaBackend))  // Exibe os dados
      
      .catch(error => console.error('Erro:', error)); // Tratamento de falhas

    ```

2. **Requisição GET **

    ```javascript
      
      fetch(`http://localhost:4000/produto`)
      .then(response => response.json())  // Converte a resposta em JSON

      .then(respostaBackend => console.log(respostaBackend))  // Exibe os dados
      
      .catch(error => console.error('Erro:', error)); // Tratamento de falhas
    ```

3. **Requisição POST **

    ```javascript
    const dados = {
      nome: 'João',
      idade: 25
   };

   fetch('http://localhost:4000/cadastrar', {
      method: 'POST',  
      headers: {
         'Content-Type': 'application/json'  // Indicando que o corpo da requisição é JSON
      },
      body: JSON.stringify(dados)  // Convertendo os dados para string JSON
   })

   .then(response => response.json())  // Convertendo a resposta para JSON

   .then(respostaBackend => console.log(respostaBackend))  // Exibindo os dados no console

   .catch(error => console.error('Erro:', error));  // Tratamento de falhas
   
    ```
4. **Requisição PUT **

    ```javascript
   const dadosAtualizados = {
      nome: 'João Silva',
      idade: 26
   };

   fetch('http://localhost:4000/usuarios/123', {
      method: 'PUT',  // Método PUT
      headers: {
         'Content-Type': 'application/json'  // Informando que o corpo da requisição é JSON
      },
      body: JSON.stringify(dadosAtualizados)  // Convertendo os dados para string JSON
   })
   
   .then(response => response.json())  // Convertendo a resposta em JSON
   
   .then(data => console.log('Usuário atualizado:', data))  // Exibindo a resposta da atualização
   
   .catch(error => console.error('Erro ao atualizar usuário:', error));  // Tratando erros

   
    ```

5. **Requisição DELETE **

    ```javascript
   
   // Variáveis
   const usuarioId = 123;  // ID do usuário que queremos excluir

   fetch(`http://localhost:4000/usuarios/${usuarioId}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json' 
      }
   })
   
   .then(response => {
      if (response.ok) {
         console.log(`Usuário com ID ${usuarioId} excluído com sucesso!`);
      } else {
         throw new Error('Falha ao excluir o usuário');
      }
   })

   .catch(error => console.error('Erro ao atualizar usuário:', error));  // Tratando erros


   
    ```

6. **Requisição com uso de TOKEN **

    ```javascript
      const token = 'seu_token_aqui';  // Token que você já possui

      const dados = {
         username: 'meuUsuario',
         password: 'minhaSenha'
      };

      fetch('http://localhost:4000/login', {
         method: 'POST',  // Método POST
         headers: {
            'Content-Type': 'application/json'  // Informando que o corpo da requisição é JSON
            'token': token
         },
      body: JSON.stringify(dados)  // Enviando os dados de login como JSON
      })
      
      .then(response => response.json())  // Convertendo a resposta para JSON
      
      .then(data => console.log('SUCESSO') ) 
      
      .catch(error => console.error('Erro:', error));  // Tratando erros



    ```
   
### Uso de componentes
- CRIE UMA NOVA CLASSE

 ```javascript
      import React from 'react';

      function Saudacao({ nome }) {
      return <h1>Olá, {nome}!</h1>;
      }

      export default Saudacao;



 ```

- USANDO

 ```javascript
      
      import React from 'react';
      import Saudacao from './Saudacao'; // IMPORTE A SUA CLASSE

      function App() {
         return (
            <div>
               <Saudacao nome="Maria" /> // USO DA CLASSE
               <Saudacao nome="João" />
            </div>
         );
      }

      export default App;


```

   

docker-compose build
docker-compose up -d