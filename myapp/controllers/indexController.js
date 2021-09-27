const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");
const dataComentarios = require ("../data/comentarios");



const indexController = {
    index: function(req, res, next) {
        res.render('index', {
            title: "instaCars",
            posts: dataPosteos.lista,
            usuario: dataUsuarios.lista,
        });
    },

}

module.exports = indexController;