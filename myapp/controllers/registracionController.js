const db = require('../database/models'); //relaciona controlador con modelos
const registracion = db.Register;
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const registracionController = {
    index: function (req, res) {
        res.render ('register', {error: null})
    },

    store: function(req, res){
        res.send(req.file)
    },

    createUser: (req, res) => {
        if (
            req.body.nombre !="" &&
            req.body.apellido !="" &&
            req.body.email !="" &&
            req.body.fecha !="" &&
            req.body.usuario !="" &&
            req.body.passwords !="" 
            ) {
            if (req.body.passwords.length >= 4) {
                if (req.body.passwords == req.body.confirContra) {
                    if (req.file) {
                        let passEncriptada = bcrypt.hashSync(req.body.passwords);
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        nombre: req.body.nombre,
                                        apellido: req.body.apellido,
                                        username: req.body.usuario,
                                        email: req.body.email,
                                        passwords: passEncriptada,
                                        picture: req.file.filename,
                                        fecha: req.body.fecha,
                                        
                                    }).then(user => {
                                        req.session.usuario = user

                                        res.cookie('userId', user.id, {
                                            maxAge: 1000 * 60 * 5
                                        });

                                        res.redirect('/');
                                    });
                                } else {
                                    res.render('register', {
                                        error: 'Ya existe este nombre de usuario'
                                    })
                                }
                            })

                    } else {

                        let passEncriptada = bcrypt.hashSync(req.body.passwords);
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        name: req.body.nombre,
                                        last_name: req.body.apellido,
                                        email: req.body.email,
                                        nacimiento: req.body.fecha,
                                        username: req.body.usuario,
                                        cover: 'fotodefault.jpeg',
                                        passwords: passEncriptada,
                                    }).then(user => {
                                        req.session.usuario = user
                                        res.cookie('userId', user.id, {
                                            maxAge: 1000 * 60 * 5
                                        });

                                        res.redirect('/');
                                    });
                                } else {
                                    res.render('register', {
                                        error: 'Ya existe este nombre de usuario'
                                    })
                                }
                            })
                    }
                } else {
                    res.render('register', {
                        error: 'Las contraseñas no coinciden'
                    })
                }
            } else {
                res.render('register', {
                    error: 'La contraseña tiene que tener mas de tres caracteres'
                })
            }
        } else {
            res.render('register', {
                error: 'No puede haber campos vacios'
            })
        }
    }
};

module.exports = registerController