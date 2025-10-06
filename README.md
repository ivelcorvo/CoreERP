# 🚀 CoreERP - Full-Stack Moderno (Express/TS + MongoDB + Vite/React)

[![Frontend CI/CD (GitHub Pages)](https://github.com/ivelcorvo/CoreERP/actions/workflows/frontend-ci-cd.yml/badge.svg?branch=main)](https://github.com/ivelcorvo/CoreERP/actions/workflows/frontend-ci-cd.yml)

[![Backend CI/CD (Render)](https://github.com/ivelcorvo/CoreERP/actions/workflows/backend-ci-cd.yml/badge.svg?branch=main)](https://github.com/ivelcorvo/CoreERP/actions/workflows/backend-ci-cd.yml)

Aplicação desenvolvida em **Node.js (Express + TypeScript)** no backend e  
**React (Vite + TypeScript)** no frontend, utilizando **Docker Compose** para  
ambiente de desenvolvimento isolado e **MongoDB Atlas** para persistência de dados.

A arquitetura segue o modelo de **microsserviços**, com deploy automatizado via  
**Render** (Backend) e **GitHub Pages** (Frontend).

---

## 🚀 Tecnologias Utilizadas

- **Node.js (Express + TypeScript)** – API RESTful modular  
- **React (Vite + TypeScript)** – Interface de usuário (SPA)  
- **MongoDB Atlas** – Banco de dados em nuvem  
- **Docker & Docker Compose** – Contêineres para backend e frontend  
- **GitHub Actions** – Pipeline CI/CD automatizado  
- **Render** – Deploy do backend  
- **GitHub Pages** – Deploy do frontend  

---

## 🔒 Deploy e Integração Contínua

O pipeline de **CI/CD (GitHub Actions)** realiza automaticamente:

- Build do backend e frontend  
- Deploy do **Backend no Render**  
- Deploy do **Frontend no GitHub Pages**  

Essa configuração garante:
- Entrega contínua e automatizada  
- Integração estável entre os serviços  
- Deploy seguro com tokens armazenados em **GitHub Secrets**

---

## 💡 Destaques Técnicos

- Arquitetura moderna baseada em **microsserviços**  
- **TypeScript** em todas as camadas  
- Conexão com **MongoDB Atlas**  
- Ambiente padronizado com **Docker Compose**  
- CI/CD automatizado com **GitHub Actions**  
- Deploy simplificado no **Render** e **GitHub Pages**
