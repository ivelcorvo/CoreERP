import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001; 
const mongoUri = process.env.MONGO_URI || '';

app.use(express.json());

// Rota de Teste (API)
app.get('/api/status', (req, res) => {
  res.json({
    message: 'Backend API is running!',
    database: mongoose.STATES[mongoose.connection.readyState] 
  });
});

// Conexão com o MongoDB Atlas e inicialização do servidor
mongoose.connect(mongoUri)
  .then(() => {
    console.log('✅ Conectado ao MongoDB Atlas');
    app.listen(port, () => {
      console.log(`⚡️ Servidor Express rodando em: http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('❌ Erro de conexão com o MongoDB:', error);
    process.exit(1);
  });
