const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");
const dataComentarios = require ("../data/comentarios");



const indexController = {
    index: function(req, res, next) {
        res.render('index', {
            title: "instaCars",
            posts: dataPosteos.lista,
            usuarios: dataUsuarios.lista,
            comentario: dataComentarios.lista
        });
    },

}

module.exports = indexController;