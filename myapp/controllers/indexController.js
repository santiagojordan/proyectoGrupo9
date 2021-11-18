const dataPosteos = require ('../data/posteos')
const dataUsuarios = require ('../data/usuarios');
const dataComentarios = require('../data/comentarios');
//const dataComentarios = require('../data/comentarios');

const indexController = {
    index: function(req, res, next) {
        return res.render('index', {
          posts: dataPosteos.lista,
          usuarios: dataUsuarios.lista,
          comentario: dataComentarios.lista,
        });
    },
}

module.exports = indexController