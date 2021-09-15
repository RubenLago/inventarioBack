const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { getByEmail } = require('../models/usuarios.models');

const checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({
            error: 'Necesitas la cabecera de la autorización'
        });
    }

    const token = req.headers['authorization'];
    let obj;
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.json({ error: 'El token es incorrecto' })
    }

    if (obj.expiredAt < dayjs().unix()) {
        return res.json({ error: 'Finalizado tiempo de la sesión -dayjs-' })
    }

    const usuario = await getByEmail(obj.usuarioEmail)
    req.user = usuario;
    next()
}



module.exports = { checkToken }