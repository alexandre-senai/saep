import React, { useEffect, useState } from "react";

function Home() {
  // Estado para armazenar a mensagem
  const [mensagem, setMensagem] = useState("");

  // Função para chamar o servidor
  function chamarServidor() {
    fetch("http://localhost:80/mensagem")
      .then((resposta) => resposta.json())

      .then((resultadoDoBackend) => {
        setMensagem(resultadoDoBackend.mensagem);
      })
      
      .catch(() => setMensagem("Erro ao buscar mensagem"));
  }

  return (
    // HTML
    <div>
      <h1>teste</h1>
      <button onClick={chamarServidor}>CHAMAR SERVIDOR</button>

      
      <p>{mensagem}</p>
    </div>
  );
}

export default Home;
