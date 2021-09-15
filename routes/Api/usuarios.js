const { crearUsuario, borrarUsuarioId, getByEmail } = require('../../models/usuarios.models');
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');


//resgistrar nuevo usario
router.post('/registro', async (req, res) => {
    //console.log(req.body)

    req.body.password = bcrypt.hashSync(req.body.password, 12) //password encryptadas

    const nuevoUsuario = await crearUsuario(req.body)
    res.json(nuevoUsuario)

})

//borrar usuario
router.delete('/borrar/:idUsuario', async (req, res) => {
    const borrar = await borrarUsuarioId(req.params.idUsuario)
    res.json(borrar)

})

//login
router.post('/login', async (req, res) => {
    console.log(req.body)
    const usuario = await getByEmail(req.body.email);
    console.log(usuario)
    if (!usuario) {
        return res.json({ error: "Email incorrecto" })
    }

    const iguales = bcrypt.compareSync(req.body.password, usuario.password);
    if (iguales) {
        res.json({
            success: 'Login correcto',
            token: createToken(usuario)
        })
        //JWT
    } else {
        return res.json({ error: "El email o contraseña son incorrectos" })
    }



});

function createToken(usuario) {
    const obj = {
        usuarioEmail: usuario.email,
        createdAt: dayjs().unix(),
        expiredAt: dayjs().add(5, 'minutes').unix()
    }
    console.log(obj);
    return jwt.sign(obj, process.env.SECRET_KEY);

}

module.exports = router




