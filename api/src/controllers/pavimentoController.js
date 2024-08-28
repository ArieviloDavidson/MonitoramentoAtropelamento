const status = require('http-status');

// Função SearchAll
exports.SearchAll = (req, res, next) => {
    const query = 'SELECT * FROM pavimento';

    req.db.query(query, (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(status.OK).send(results);
    });
};

// Função SearchOne
exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    const query = 'SELECT * FROM pavimento WHERE CodPav = ?';

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
