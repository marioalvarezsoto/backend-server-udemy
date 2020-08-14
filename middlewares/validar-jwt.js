var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



// ======================================
// Verificar token
// ======================================
const validarJWT = (req, res, next) => {

    // Leer el token
    var token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = uid;
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token incorrecto'
        });
    }



    // jwt.verify(token, SEED, (err, decoded) => {

    //     if (err) {
    //         return res.status(401).json({
    //             ok: false,
    //             mensaje: 'Token incorrecto',
    //             errors: err
    //         });
    //     }
    //     req.usuario = decoded.usuario;

    //     next();

    // });

}

module.exports = {
    validarJWT
}