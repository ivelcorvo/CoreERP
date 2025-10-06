import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Aguardando...');

  useEffect(() => {
    // A chamada é feita via proxy para o backend
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.message + ' DB: ' + data.database))
      .catch((err) => setStatus('Erro ao conectar com o Backend.' + err.message));
  }, []);

  return (
    <div>
      <h1>Status Fullstack</h1>
      <p>Status da API: <strong>{status}</strong></p>
    </div>
  );
}

export default App;
