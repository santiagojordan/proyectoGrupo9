const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");
const dataComentarios = require ("../data/comentarios");

const indexController = {
    index: (req,res) => {
        res.render ('index', {})
    
    }
}

module.exports = indexController;