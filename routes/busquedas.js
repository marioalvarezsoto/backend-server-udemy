/*
    ruta: api/todo/
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
    getTodo,
    getColeccion,
} = require('../controllers/busquedas');

const { validarJWT } = require('../helpers/validar-jwt');

const router = Router();


router.get('/:busqueda', validarJWT, getTodo);

router.get('/coleccion/:tabla/:busqueda', validarJWT, getColeccion);


module.exports = router;