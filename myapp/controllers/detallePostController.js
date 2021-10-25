const dataPost = require ('../data/posteos')
const dataUser = require ('../data/usuarios')

const detallePostController = {
    index: function(req, res, next) {
        return res.render('detallePost', {
          posts: dataPost.list,
          usuario: dataUser.list
         });
      }
}

module.exports = detallePostController