const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");
const dataComentarios = require ("../data/comentarios");

const miPerfilController = {
    index: function (req,res) {
        res.render("miPerfil", {users: data.lista, listaPosts: posts.lista})
    },
    edit: function (req,res) {
        res.render("editarPerfil")
    }
}

module.exports = miPerfilController;