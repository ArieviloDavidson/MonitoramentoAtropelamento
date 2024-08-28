const status = require('http-status');

// Função SearchAll
exports.SearchAll = (req, res, next) => {
    const query = `SELECT
                        O.CodOco, R.Descricao as Regiao
                    FROM
                        ocorrencia O
                        INNER JOIN ocoreg OC ON Oc.CodOco = O.CodOco
                        INNER JOIN regiao R ON OC.CodReg = R.CodReg
                    ORDER BY O.CodOco`;

    req.db.query(query, (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(status.OK).send(results);
    });
};

exports.SearchByParams = (req, res, next) => {
    const regiao = req.query.regiao || '%';
    const ocorrencia = req.query.ocorrencia || '%';

    const query = `SELECT
                        O.CodOco, R.Descricao as Regiao
                    FROM
                        ocorrencia O
                        INNER JOIN ocoreg OC ON Oc.CodOco = O.CodOco
                        INNER JOIN regiao R ON OC.CodReg = R.CodReg
                    WHERE
                        R.CodReg LIKE ? AND
                        O.CodOco LIKE ?
                    ORDER BY O.CodOco`;

    params = [regiao, ocorrencia]

    req.db.query(query, params, (error, results) => {
        if (error) {
            return next(error);
        }
        if (results.length > 0) {
            res.status(status.OK).send(results);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    });
};