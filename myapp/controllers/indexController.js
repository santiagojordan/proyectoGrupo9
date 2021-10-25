const dataPosteos = require ('../data/posteos')
const dataUsuarios = require ('../data/usuarios')

const indexController = {
    index: function(req, res, next) {
        return res.render('index', {
          posts: dataPosteos.list,
          usuarios: dataUsuarios.list
        });
    },
}

module.exports = indexController