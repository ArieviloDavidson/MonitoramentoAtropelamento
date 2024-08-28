const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoriaController');
const categorialocalController = require('../controllers/categorialocalController');
const classestaxonomicasController = require('../controllers/classestaxonomicasController');
const especieController = require('../controllers/especieController');
const ocoregController = require('../controllers/ocoregController');
const ocorrenciaController = require('../controllers/ocorrenciaController');
const pavimentoController = require('../controllers/pavimentoController');
const regiaoController = require('../controllers/regiaoController');
const rodoviaController = require('../controllers/rodoviaController');
const situacaoController = require('../controllers/situacaoController');
const ufController = require('../controllers/ufController');

router.get('/categoria', categoriaController.SearchAll);
router.get('/categoria/:id', categoriaController.SearchOne);

router.get('/categorialocal', categorialocalController.SearchAll);
router.get('/categorialocal-query', categorialocalController.SearchByParams);

router.get('/classestaxonomicas', classestaxonomicasController.SearchAll);
router.get('/classestaxonomicas/:id', classestaxonomicasController.SearchOne);

router.get('/especie', especieController.SearchAll);
router.get('/especie/:id', especieController.SearchOne);

router.get('/ocoreg', ocoregController.SearchAll);
router.get('/ocoreg-query', ocoregController.SearchByParams);

router.get('/ocorrencia', ocorrenciaController.SearchAll);
router.get('/ocorrencia/:id', ocorrenciaController.SearchOne);
router.get('/ocorrencia-query', ocorrenciaController.Query); // QUERY PARA CONSULTA GERAL

router.get('/pavimento', pavimentoController.SearchAll);
router.get('/pavimento/:id', pavimentoController.SearchOne);

router.get('/regiao', regiaoController.SearchAll);
router.get('/regiao/:id', regiaoController.SearchOne);

router.get('/rodovia', rodoviaController.SearchAll);
router.get('/rodovia/:id', rodoviaController.SearchOne);

router.get('/situacao', situacaoController.SearchAll);
router.get('/situacao/:id', situacaoController.SearchOne);

router.get('/uf', ufController.SearchAll);
router.get('/uf/:id', ufController.SearchOne);

module.exports = router;