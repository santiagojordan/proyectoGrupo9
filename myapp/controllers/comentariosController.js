const db = require("../models");
const comentarios= db.Comentarios;

const comentariosController = {
    findAll : function (req, res) {
        // nuestro codigo para buscar mis datos en usuarios db
        comentarios.findAll()
            .then( data =>{
                return res.send(data);
            })
            .catch( error => {
                return res.send(error);
            })
    }
}

module.exports = comentariosController;