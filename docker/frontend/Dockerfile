# docker/frontend/Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

COPY frontend/package*.json ./
RUN npm install

# Mantém o container vivo para o desenvolvimento
CMD ["tail", "-f", "/dev/null"]
