import React, { useState, useEffect } from 'react';
import './deletar.css'

function Consulta() {
    const [ocorrencias, setOcorrencias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOcorrencias(); // Carregar as ocorrências ao montar o componente
    }, []);

    const fetchOcorrencias = () => {
        fetch('http://localhost:3003/sistema/ocorrencia')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar ocorrências');
                }
                return response.json();
            })
            .then(data => {
                setOcorrencias(data);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleDelete = (id) => {
      fetch(`http://localhost:3003/sistema/ocorrencia/delete`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ CodOco: id }),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(`Erro ao deletar ocorrência: ${response.statusText}`);
          }
          return response.json();
      })
      .then(data => {
          setOcorrencias(ocorrencias.filter(ocorrencia => ocorrencia.CodOco !== id));
      })
      .catch(error => {
          console.error('Erro ao deletar ocorrência:', error.message);
      });
    };
  
  
    if (error) {
        return <div>Erro ao buscar dados: {error}</div>;
    }

    return (
        <div className='Corpo2'>
            <h2>Consulta de Ocorrências</h2>
            <div className="tabela-container2">
                <table className='tabela2'>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Km</th>
                            <th>Número de Pistas</th>
                            <th>Velocidade Máxima</th>
                            <th>Data</th>
                            <th>Havia Água</th>
                            <th>Espécie</th>
                            <th>Classe</th>
                            <th>Categoria</th>
                            <th>Pavimento</th>
                            {/* <th>Região</th> */}
                            <th>Rodovia</th>
                            <th>Estado</th>
                            <th>Situação</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ocorrencias.map(ocorrencia => (
                            <tr key={ocorrencia.CodOco}>
                                <td>{ocorrencia.CodOco}</td>
                                <td>{ocorrencia.Km}</td>
                                <td>{ocorrencia.NumPistas}</td>
                                <td>{ocorrencia.VelocidadeMax}</td>
                                <td>{ocorrencia.Data}</td>
                                <td>{ocorrencia.HaviaAgua}</td>
                                <td>{ocorrencia.Especie}</td>
                                <td>{ocorrencia.Classe}</td>
                                <td>{ocorrencia.Categoria}</td>
                                <td>{ocorrencia.Pavimento}</td>
                                {/* <td>{ocorrencia.Regiao}</td> */}
                                <td>{ocorrencia.Rodovia}</td>
                                <td>{ocorrencia.Estado}</td>
                                <td>{ocorrencia.Situacao}</td>
                                <td>
                                    <button className='bt-deletar' onClick={() => handleDelete(ocorrencia.CodOco)}>Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Consulta;