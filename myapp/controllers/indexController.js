const db = require('../database/models');
const Op = db.Sequelize.Op;

const indexController = {
    
    index: (req, res) => { 
        db.Post.findAll({
            include: [{
                all:true,
                nested: true
            }],

            }).then(postsViejos => {
            
                res.render('index', {
                    postsViejos: postsViejos
                });
            })
        

    }
}

module.exports = indexController