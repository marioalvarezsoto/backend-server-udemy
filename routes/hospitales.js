/*
    Ruta: '/api/hospitales'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
} = require('../controllers/hospitales');

const { validarJWT } = require('../helpers/validar-jwt');

const router = Router();


router.get('/', validarJWT, getHospitales);

router.post('/', [
        validarJWT,
        check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ],
    crearHospital
);

router.put('/:id', [],
    actualizarHospital
);

router.delete('/:id',
    borrarHospital
);




module.exports = router;