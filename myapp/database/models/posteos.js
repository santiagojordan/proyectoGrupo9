module.exports = function(sequelize, dataTypes) {

    const alias = 'Posteo';
  
    const columnas = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pieFoto: {
        type: dataTypes.STRING
      },
      fechaCreacion: {
        type: dataTypes.DATETIME
      },
      foto: {
        type: dataTypes.STRING
      },
      idUsuario: {
        type: dataTypes.INTEGER
      }
    };
  
    const configuracionDeLaTabla = {
      tableName: "posteos",
      timestamps: false,
      underscorded: false
    };
    
    const Posteo = sequelize.define(alias,columnas,configuracionDeLaTabla);
  
    Posteo.associate = function(models) {
        Posteo.hasMany(models.Usuario, {
        as: 'Usuario',
        foreignKey: 'idUsuario' // idUsuario es la misma foreignKey que tenes que
        // poner en el modelo de Posteo
      }),
      Posteo.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: 'idUsuario' // idUsuario es la misma foreignKey que tenes que
        // poner en el modelo de Comentario
      })
    };
  
    return Posteo;
  
  };