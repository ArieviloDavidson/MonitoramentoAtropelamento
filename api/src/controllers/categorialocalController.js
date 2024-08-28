const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    const query = `SELECT
                        CL.CodCatLocal, E.NomePopular, C.Nome, U.NomeUF
                    FROM
                        categorialocal CL
                        INNER JOIN especie E ON E.CodEspec = CL.CodEspec
                        INNER JOIN uf U ON U.CodUF = CL.CodUF
                        INNER JOIN categoria C ON C.CodCateg = CL.CodCateg
                    ORDER BY CL.CodCatLocal`;

    req.db.query(query, (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(status.OK).send(results);
    });
};

exports.SearchByParams = (req, res, next) => {

    const especie = req.query.especie || '%';
    const estado = req.query.estado || '%';
    const categoria = req.query.categoria || '%';

    const query = `SELECT 
                        CL.CodCatLocal, E.NomePopular, C.Nome, U.NomeUF
                    FROM 
                        categorialocal CL
                        INNER JOIN especie E ON E.CodEspec = CL.CodEspec
                        INNER JOIN uf U ON U.CodUF = CL.CodUF
                        INNER JOIN categoria C ON C.CodCateg = CL.CodCateg
                    WHERE
                        E.CodEspec LIKE ? AND
                        U.CodUF LIKE ? AND
                        C.CodCateg LIKE ?
                    ORDER BY CL.CodCatLocal`;

    const params = [especie, estado, categoria]

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