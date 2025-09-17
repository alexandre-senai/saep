# Projeto React + Node.js + PostgreSQL

## 📂 Estrutura
- **frontend/** → Aplicação React em HTML e CSS puro com React Router
- **backend/** → API em Node.js conectada ao PostgreSQL
- **migrations/** → Scripts para criar as tabelas no banco

---

## 🚀 Como rodar o projeto

### 1. Banco de Dados
1. Crie o banco:
   ```sql
   CREATE DATABASE meubanco;
   ```

2. Rode a migration:
   ```bash
   cd backend
   npm run migrate
   ```

---

### 2. Backend
```bash
cd backend
npm install
npm start
```
Servidor roda em **http://localhost:5000**

---

### 3. Frontend
```bash
cd frontend
npm install
npm start
```
Frontend roda em **http://localhost:3000**

---

## 🖼️ Fluxo do sistema
1. Página inicial → contém um botão centralizado
2. Clique no botão → redireciona para a página **Home**
3. Página Home → faz `fetch` para `http://localhost:5000/mensagem` e exibe a mensagem do banco

---

## 🛠️ Tecnologias
- **Frontend:** React, HTML, CSS puro, React Router
- **Backend:** Node.js, Express, PostgreSQL
