import React, { useEffect, useState } from "react";
import Pessoa from '../../../components/pessoa/Pessoa'

function Home() {
  
  //VARIAVEL PESSOA 
                  //ATRIBUICAO DE PESSOA
                                //RECARREGA PESSOA VISUALMENTE (RERESH)
                                      // [] = ARRAY OU LISTA VAZIA
   const [pessoas, setPessoa] = useState([]);

   //JAVASCRIPT
   //useEffect - AO ABRIR A TELA EXECUTE TAL COISA 
   useEffect(() => { 
   
  }, []);


  function chamarServidor(){

     var idade = 50;
    //SOMENTE REQUISIÇÕES GET
    var enderecoBackEnd = "http://localhost:5000/exbirCarroBanco?filtro=" + idade;
    var enderecoBackEnd2 = "http://localhost:5000/exbirCarroBanco?filtro=${idade}";

    fetch("http://localhost:5000/exbirCarroBanco")
      .then((resposta) => resposta.json())

      .then((resultadoDoBackend) => {
        setPessoa(resultadoDoBackend.mensagem);

      }).catch(() => setPessoa([]));
  }
 
  return (
    //HTML
    <div>
      <h1>teste</h1>
      <button onClick={chamarServidor}> CHAMAR SERVIDOR</button>
        {
          // JAVASCRIPT
          // LAÇOS DE REPETIÇÃO
              //  PERCORRE A LISTA JA TRAZENDO A INFORMAO SEM CONTADOR
                //  lista.map( (pessoa) => () )
                  pessoas.map( (posicao) => (

                     <Pessoa nome={posicao.tx_nome} 
                            idade={posicao.nr_ano} 
                            documento={posicao.nr_documento}
                      />
                  ))
        }
    </div>
  );
}

export default Home;