const { response } = require('express');

const Medico = require('../models/medico');



const getMedicos = async(req, res = response) => {
    const medicos = await Medico.find()
        .populate('usuario', 'nombre img')
        .populate('hospital', 'nombre img');

    res.json({
        ok: true,
        medicos
    });
};

const crearMedico = async(req, res = response) => {

    const uid = req.uid;
    const medico = new Medico({
        usuario: uid,
        ...req.body
    });

    console.log('Usuario: ', uid);

    try {

        const medicoDB = await medico.save();

        res.json({
            ok: true,
            medico: medicoDB,
            msg: 'Medico Guardado'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};

const actualizarMedico = async(req, res = response) => {

    res.json({
        ok: true,
        msg: 'Actualizar Medico'
    });
};

const borrarMedico = async(req, res = response) => {

    res.json({
        ok: true,
        msg: 'Borrar Medico'
    });
};


module.exports = {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico,

}