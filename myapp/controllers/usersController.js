const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");
const dataComentarios = require ("../data/comentarios");

const usersController = {
    index: (req,res) => {
        console.log ("El usuario ha sido registrado.");
        res.render ("index", {style: "index", logueado: true, usuario: dataUsuarios, verMas: false,
            posteo: dataPosteos, usuarioComentario: dataComentarios
    });
    }
}

module.exports = usersController;