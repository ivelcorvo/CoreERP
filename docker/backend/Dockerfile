# docker/backend/Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

# Instala as dependências
COPY backend/package*.json ./
RUN npm install

# Copia o restante do código
COPY backend/ .

CMD ["npm", "run", "start"]
