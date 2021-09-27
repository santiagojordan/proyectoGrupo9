const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");
const dataComentarios = require ("../data/comentarios");

const usersController = {
        index: function(req, res, next) {
            return res.render('usersController', {
                usuarios: dataUsuarios.lista,
                comentario: dataComentarios.lista,
              });
          }
    }


module.exports = usersController;