const dataPost = require ('../data/posteos')
const dataUser = require ('../data/usuarios')

const indexController = {
    index: function(req, res, next) {
        return res.render('index', {
          posts: dataPost.list,
          usuario: dataUser.list
        });
    },
}

module.exports = indexController