# ----------------------
# Stage 1: Build do frontend
# ----------------------
FROM node:20 AS build-frontend
WORKDIR /app/frontend

# Copia apenas package.json para instalar dependências
COPY frontend/package*.json ./
RUN npm install

# Copia todo o frontend e gera build
COPY frontend ./
RUN npm run build

# ----------------------
# Stage 2: Backend + frontend build
# ----------------------
FROM node:20
WORKDIR /app

# Instala dependências do backend
COPY backend/package*.json ./
RUN npm install

# Copia backend
COPY backend ./

# Copia build do frontend para backend
COPY --from=build-frontend /app/frontend/build ./public

# Expõe a porta 80
EXPOSE 80

# Start do backend
CMD ["node", "server.js"]
