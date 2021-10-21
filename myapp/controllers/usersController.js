const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");


const usersController = {
    index: function(req, res, next) {
        return res.render('detalleUsuario', {
          posts: dataPosteos.list,
          usuario: dataUsuarios.list
          });
      }
}


module.exports = usersController;