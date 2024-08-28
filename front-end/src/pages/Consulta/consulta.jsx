import React, { useState, useEffect } from 'react';
import './consulta.css'

function Consulta() {
    // CONSULTAS
    const [ufs, setUfs] = useState([]);
    const [classesTaxonomicas, setClassesTaxonomicas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [pavimentos, setPavimentos] = useState([]);
    const [regioes, setRegioes] = useState([]);
    const [situacoes, setSituacoes] = useState([]);
    const [rodovias, setRodovias] = useState([]);
    const [especies, setEspecies] = useState([]);

    // SELECT
    const [selectedUf, setSelectedUf] = useState('');
    const [selectedClasse, setSelectedClasse] = useState('');
    const [selectedCategoria, setSelectedCategoria] = useState('');
    const [selectedPavimento, setSelectedPavimento] = useState('');
    const [selectedRegiao, setSelectedRegiao] = useState('');
    const [selectedSituacao, setSelectedSituacao] = useState('');
    const [selectedRodovia, setSelectedRodovia] = useState('');
    const [selectedEspecie, setSelectedEspecie] = useState('');
    const [numPistas, setNumPistas] = useState('');
    const [velocidadeMax, setVelocidadeMax] = useState('');
    const [haviaAgua, setHaviaAgua] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');

    // RESPOSTA
    const [ocorrencias, setOcorrencias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // API UF
        fetch('http://localhost:3003/sistema/uf')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar UFs');
                }
                return response.json();
            })
            .then(data => {
                setUfs(data);
            })
            .catch(error => {
                setError(error.message);
            });
            
            // API CLASSES
        fetch('http://localhost:3003/sistema/classestaxonomicas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar classes taxonômicas');
                }
                return response.json();
            })
            .then(data => {
                setClassesTaxonomicas(data);
            })
            .catch(error => {
                setError(error.message);
            });

            // API CATEGORIA
        fetch('http://localhost:3003/sistema/categoria')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar categorias');
                }
                return response.json();
            })
            .then(data => {
                setCategorias(data);
            })
            .catch(error => {
                setError(error.message);
            });

            // API PAVIMENTO
        fetch('http://localhost:3003/sistema/pavimento')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar pavimentos');
                }
                return response.json();
            })
            .then(data => {
                setPavimentos(data);
            })
            .catch(error => {
                setError(error.message);
            });

            // API REGIAO
        fetch('http://localhost:3003/sistema/regiao')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar regioes');
                }
                return response.json();
            })
            .then(data => {
                setRegioes(data);
            })
            .catch(error => {
                setError(error.message);
            });

            // API SITUACAO
        fetch('http://localhost:3003/sistema/situacao')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar situacoes');
                }
                return response.json();
            })
            .then(data => {
                setSituacoes(data);
            })
            .catch(error => {
                setError(error.message);
            });

            // API RODOVIA
        fetch('http://localhost:3003/sistema/rodovia')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar rodovias');
                }
                return response.json();
            })
            .then(data => {
                setRodovias(data);
            })
            .catch(error => {
                setError(error.message);
            });

            // API ESPECIE
        fetch('http://localhost:3003/sistema/especie')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar especies');
                }
                return response.json();
            })
            .then(data => {
                setEspecies(data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    const limparbusca = () => {
        setOcorrencias([]);
        setSelectedUf([]);
        setSelectedClasse([]);
        setSelectedCategoria([]);
        setSelectedPavimento([]);
        setSelectedRegiao([]);
        setSelectedSituacao([]);
        setSelectedRodovia([]);
        setSelectedEspecie([]);
        setNumPistas('');
        setVelocidadeMax('');
        setHaviaAgua('');
        setDataInicio('');
        setDataFim('');
    }

    const handleChangeUF = (event) => {
        setSelectedUf(event.target.value);
    };

    const handleChangeClasse = (event) => {
        setSelectedClasse(event.target.value);
    };

    const handleChangeCategoria = (event) => {
        setSelectedCategoria(event.target.value);
    };

    const handleChangePavimento = (event) => {
        setSelectedPavimento(event.target.value);
    };

    const handleChangeRegiao = (event) => {
        setSelectedRegiao(event.target.value);
    };

    const handleChangeSituacao = (event) => {
        setSelectedSituacao(event.target.value);
    };

    const handleChangeRodovia = (event) => {
        setSelectedRodovia(event.target.value);
    };

    const handleChangeEspecie = (event) => {
        setSelectedEspecie(event.target.value);
    };

    const handleChangeNumPistas = (event) => {
        setNumPistas(event.target.value);
    };

    const handleChangeVelocidadeMax = (event) => {
        setVelocidadeMax(event.target.value);
    };

    const handleChangeHaviaAgua = event => {
        setHaviaAgua(event.target.value);
    };

    const handleChangeDataInicio = event => {
        setDataInicio(event.target.value);
    };

    const handleChangeDataFim = event => {
        setDataFim(event.target.value);
    };

    const handleSearch = () => {
        let url = 'http://localhost:3003/sistema/ocorrencia-query?';
        if (selectedCategoria) {
            url += `&categoria=${selectedCategoria}`;
        }
        if (selectedUf) {
            url += `estado=${selectedUf}`;
        }
        if (selectedClasse) {
            url += `&classe=${selectedClasse}`;
        }
        if (selectedPavimento) {
            url += `&pavimento=${selectedPavimento}`;
        }
        if (selectedRegiao) {
            url += `&regiao=${selectedRegiao}`;
        }
        if (selectedSituacao) {
            url += `&situacao=${selectedSituacao}`;
        }
        if (selectedRodovia) {
            url += `&rodovia=${selectedRodovia}`;
        }
        if (selectedEspecie) {
            url += `&especie=${selectedEspecie}`;
        }
        if (numPistas) {
            url += `&numPistas=${numPistas}`;
        }
        if (velocidadeMax) {
            url += `&velocidadeMax=${velocidadeMax}`;
        }
        if (haviaAgua) {
            url += `&haviaAgua=${haviaAgua}`;
        }
        if (dataInicio) {
            url += `&dataInicio=${new Date(dataInicio).toISOString().split('T')[0]}`;
        }
        if (dataFim) {
            url += `&dataFim=${new Date(dataFim).toISOString().split('T')[0]}`;
        }

        setOcorrencias([]);

        fetch(url)
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

    if (error) {
        return <div>Erro aso buscar!{error}</div>;
    }

    return (
        <div className="Corpo">
            <h2>Consulta de Ocorrências</h2> 
            <div className='Formulario'>  
                <div className="parte-1">
                    {/* ESTADO */}
                    <div className="campo">
                        <label htmlFor="ufSelect">Selecione um Estado:</label>
                        <select id="ufSelect" value={selectedUf} onChange={handleChangeUF}>
                            <option value="">Selecione...</option>
                            {ufs.map(uf => (
                                <option key={uf.CodUF} value={uf.CodUF}>{uf.NomeUF}</option>
                            ))}
                        </select>
                    </div>

                    {/* CLASSE */}
                    <div className="campo">
                        <label htmlFor="classeSelect">Selecione uma Classe Taxonômica:</label>
                        <select id="classeSelect" value={selectedClasse} onChange={handleChangeClasse}>
                            <option value="">Selecione...</option>
                            {classesTaxonomicas.map(classe => (
                                <option key={classe.CodClasse} value={classe.CodClasse}>{classe.Nome}</option>
                            ))}
                        </select>
                    </div>

                    {/* CATEGORIA */}
                    <div className="campo">
                        <label htmlFor="categoriaSelect">Selecione uma Categoria</label>
                        <select id="categoriaSelect" value={selectedCategoria} onChange={handleChangeCategoria}>
                            <option value="">Selecione...</option>
                            {categorias.map(categoria => (
                                <option key={categoria.CodCateg} value={categoria.CodCateg}>{categoria.Nome}</option>
                            ))}
                        </select>
                    </div>

                    {/* PAVIMENTO */}
                    <div className="campo">
                        <label htmlFor="pavimentoSelect">Selecione um Pavimento</label>
                        <select id="pavimentoSelect" value={selectedPavimento} onChange={handleChangePavimento}>
                            <option value="">Selecione...</option>
                            {pavimentos.map(pavimento => (
                                <option key={pavimento.CodPav} value={pavimento.CodPav}>{pavimento.Descricao}</option>
                            ))}
                        </select>
                    </div>

                    {/* REGIAO */}
                    <div className="campo">
                        <label htmlFor="regiaoSelect">Selecione uma Região</label>
                        <select id="regiaoSelect" value={selectedRegiao} onChange={handleChangeRegiao}>
                            <option value="">Selecione...</option>
                            {regioes.map(regiao => (
                                <option key={regiao.CodReg} value={regiao.CodReg}>{regiao.Descricao}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="parte-2">
                    {/* SITUAÇÃO */}
                    <div className="campo">
                        <label htmlFor="situacaoSelect">Selecione uma Situação</label>
                        <select id="situacaoSelect" value={selectedSituacao} onChange={handleChangeSituacao}>
                            <option value="">Selecione...</option>
                            {situacoes.map(situacao => (
                                <option key={situacao.CodSi} value={situacao.CodSi}>{situacao.Descricao}</option>
                            ))}
                        </select>
                    </div>

                    {/* RODOVIA */}
                    <div className="campo">
                        <label htmlFor="rodoviaSelect">Selecione uma Rodovia</label>
                        <select id="rodoviaSelect" value={selectedRodovia} onChange={handleChangeRodovia}>
                            <option value="">Selecione...</option>
                            {rodovias.map(rodovia => (
                                <option key={rodovia.CodRod} value={rodovia.CodRod}>{rodovia.Nome}</option>
                            ))}
                        </select>
                    </div>

                    {/* ESPECIE */}
                    <div className="campo">
                        <label htmlFor="especieSelect">Selecione uma Espécie</label>
                        <select id="especieSelect" value={selectedEspecie} onChange={handleChangeEspecie}>
                            <option value="">Selecione...</option>
                            {especies.map(especie => (
                                <option key={especie.CodEspec} value={especie.CodEspec}>{especie.NomePopular}</option>
                            ))}
                        </select>
                    </div>

                    {/* NUMERO DE PISTAS */}
                    <div className="campo">
                        <label htmlFor="numPistasInput">Número de Pistas (1 a 10):</label>
                        <input
                            type="number"
                            id="numPistasInput"
                            value={numPistas}
                            onChange={handleChangeNumPistas}
                            min="1"
                            max="10"
                        />
                    </div>

                    {/* VELOCIDADE MAXIMA */}
                    <div className="campo">
                        <label htmlFor="velocidadeMaxInput">Velocidade Máxima:</label>
                        <input
                            type="number"
                            id="velocidadeMaxInput"
                            value={velocidadeMax}
                            onChange={handleChangeVelocidadeMax}
                        />
                    </div>
                </div>

                <div className="parte-3">
                    {/* HAVIA ÁGUA */}
                    <div className="campo">
                        <label htmlFor="haviaAguaSelect">Havia Água:</label>
                        <select id="haviaAguaSelect" value={haviaAgua} onChange={handleChangeHaviaAgua}>
                            <option value="">Selecione...</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </select>
                    </div>

                    {/* DATA INICIO */}
                    <div className="campo">
                        <label htmlFor="dataInicio">Data de Início:</label>
                        <input
                            type="date"
                            id="dataInicio"
                            value={dataInicio}
                            onChange={handleChangeDataInicio}
                        />
                    </div>

                    {/* DATA FIM */}
                    <div className="campo">
                        <label htmlFor="dataFim">Data Final:</label>
                        <input
                            type="date"
                            id="dataFim"
                            value={dataFim}
                            onChange={handleChangeDataFim}
                        />
                    </div>
                </div>
            </div>

            <div className="bts">
                <button className='bt-consulta' onClick={handleSearch}>Pesquisar</button>
                <button className='bt-consulta' onClick={limparbusca}>Limpar Busca</button>
            </div>

            {ocorrencias.length > 0 ? (
                <div className="tabela-container">
                    <table className='tabela'>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Km</th>
                                <th>Num Pistas</th>
                                <th>Velocidade Máx</th>
                                <th>Data</th>
                                <th>Havia Água</th>
                                <th>Espécie</th>
                                <th>Classe</th>
                                <th>Categoria</th>
                                <th>Pavimento</th>
                                <th>Região</th>
                                <th>Rodovia</th>
                                <th>Estado</th>
                                <th>Situação</th>
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
                                    <td>{ocorrencia.Regiao}</td>
                                    <td>{ocorrencia.Rodovia}</td>
                                    <td>{ocorrencia.Estado}</td>
                                    <td>{ocorrencia.Situacao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : 
                <p>Nenhuma ocorrência encontrada.</p>
            }
        </div>
    );
}

export default Consulta;