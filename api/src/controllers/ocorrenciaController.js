const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    const query = `
        SELECT DISTINCT
            O.CodOco, 
            O.Km,
            O.NumPistas,
            O.VelocidadeMax,
            DATE_FORMAT(O.Data, '%d/%m/%Y') AS Data,
            O.HaviaAgua,
            E.NomePopular AS Especie, 
            CT.Nome AS Classe,
            C.Nome AS Categoria, 
            P.Descricao AS Pavimento, 
            R.Nome AS Rodovia, 
            U.NomeUF AS Estado, 
            S.Descricao AS Situacao
        FROM 
            ocorrencia O 
            INNER JOIN pavimento P ON P.CodPav = O.CodPav 
            INNER JOIN situacao S ON S.CodSi = O.CodSi 
            INNER JOIN rodovia R ON R.CodRod = O.CodRod 
            INNER JOIN ocoreg OC ON OC.CodOco = O.CodOco 
            INNER JOIN regiao RE ON RE.CodReg = OC.CodReg 
            INNER JOIN categorialocal CL ON O.CodCatLocal = CL.CodCatLocal 
            INNER JOIN especie E ON E.CodEspec = CL.CodEspec 
            INNER JOIN categoria C ON C.CodCateg = CL.CodCateg 
            INNER JOIN uf U ON U.CodUF = CL.CodUF 
            INNER JOIN classestaxonicas CT ON CT.CodClasse = E.CodClasse
        ORDER BY O.CodOco
    `;

    req.db.query(query, (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(200).json(results);
    });
};

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    const query = 'SELECT * FROM ocorrencia WHERE CodOco = ?';

    req.db.query(query, [id], (error, results) => {
        if (error) {
            return next(error);
        }
        if (results.length > 0) {
            res.status(status.OK).send(results[0]);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    });
};

exports.Query = (req, res, next) => {
    const pavimento = req.query.pavimento || '%';
    const regiao = req.query.regiao || '%';
    const situacao = req.query.situacao || '%';
    const rodovia = req.query.rodovia || '%';
    const especie = req.query.especie || '%';
    const categoria = req.query.categoria || '%';
    const estado = req.query.estado || '%';
    const classe = req.query.classe || '%';
    const numPistas = req.query.numPistas || '%';
    const velocidadeMax = req.query.velocidadeMax || '%';
    const haviaAgua = req.query.haviaAgua || '%';
    const dataInicio = req.query.dataInicio || '1900-01-01';
    const dataFim = req.query.dataFim || '9999-12-31';

    const query = `
        SELECT 
            O.CodOco, 
            O.Km,
            O.NumPistas,
            O.VelocidadeMax,
            DATE_FORMAT(O.Data, '%d/%m/%Y') AS Data,
            O.HaviaAgua,
            E.NomePopular AS Especie, 
            CT.Nome AS Classe,
            C.Nome AS Categoria, 
            P.Descricao AS Pavimento, 
            RE.Descricao AS Regiao, 
            R.Nome AS Rodovia, 
            U.NomeUF AS Estado, 
            S.Descricao AS Situacao
        FROM 
            ocorrencia O 
            INNER JOIN pavimento P ON P.CodPav = O.CodPav 
            INNER JOIN situacao S ON S.CodSi = O.CodSi 
            INNER JOIN rodovia R ON R.CodRod = O.CodRod 
            INNER JOIN ocoreg OC ON OC.CodOco = O.CodOco 
            INNER JOIN regiao RE ON RE.CodReg = OC.CodReg 
            INNER JOIN categorialocal CL ON O.CodCatLocal = CL.CodCatLocal 
            INNER JOIN especie E ON E.CodEspec = CL.CodEspec 
            INNER JOIN categoria C ON C.CodCateg = CL.CodCateg 
            INNER JOIN uf U ON U.CodUF = CL.CodUF 
            INNER JOIN classestaxonicas CT ON CT.CodClasse = E.CodClasse 
        WHERE 
            P.CodPav LIKE ? AND
            RE.CodReg LIKE ? AND
            S.CodSi LIKE ? AND
            R.CodRod LIKE ? AND
            E.CodEspec LIKE ? AND
            C.CodCateg LIKE ? AND
            U.CodUF LIKE ? AND
            CT.CodClasse LIKE ? AND
            O.NumPistas LIKE ? AND
            O.VelocidadeMax LIKE ? AND
            O.HaviaAgua LIKE ? AND
            O.Data BETWEEN ? AND ?
        ORDER BY O.CodOco
    `;

    const params = [pavimento, regiao, situacao, rodovia, especie, categoria, estado, classe, numPistas, velocidadeMax, haviaAgua, dataInicio, dataFim];

    req.db.query(query, params, (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(status.OK).send(results);
    });
};