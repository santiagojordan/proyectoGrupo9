const dataUsuarios = require ("../data/usuarios");
const dataPosteos = require ("../data/posteos");
const dataComentarios = require ("../data/comentarios");

const registracionController = {
    index: (req,res) => {
        return res.render('registracion', {  });
    
    }
}

module.exports = registracionController;