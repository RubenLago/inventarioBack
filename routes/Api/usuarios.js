const { crearUsuario, borrarUsuarioId } = require('../../models/usuarios.models');
const bcrypt = require('bcryptjs');
const router = require('express').Router();

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

module.exports = router




