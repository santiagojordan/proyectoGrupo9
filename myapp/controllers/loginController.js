const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");
const dataComentarios = require ("../data/comentarios");

const loginController = {
    index: (req,res) => {
        return res.render('login', {  });
    
    }
}

module.exports = loginController;