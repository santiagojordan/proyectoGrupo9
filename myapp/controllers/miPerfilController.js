const dataPost = require ('../data/posteos')
const dataUser = require ('../data/usuarios')

const miPerfilController = {
    index: function(req, res, next) {
        return res.render('miPerfil', {
          posts: dataPost.list,
          usuario: dataUser.list
          });
      }
}

module.exports = miPerfilController