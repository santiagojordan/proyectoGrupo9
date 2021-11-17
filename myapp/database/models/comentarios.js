module.exports = function(sequelize, dataTypes) {

    const alias = 'Comentario';
  
    const columnas = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Comentario: {
        type: dataTypes.STRING
      },
      fechaCreacion: {
        type: dataTypes.DATETIME
      }
    };
  
    const configuracionDeLaTabla = {
      tableName: "comentarios",
      timestamps: false,
      underscorded: false
    };
    
    const Comentario = sequelize.define(alias,columnas,configuracionDeLaTabla);
  
    Comentario.associate = function(models) {
        Comentario.hasMany(models.Posteo, {
        as: 'posteos',
        foreignKey: 'idUsuario' // idUsuario es la misma foreignKey que tenes que
        // poner en el modelo de Posteo
      }),
        Comentario.hasMany(models.Usuario, {
        as: 'usuarios',
        foreignKey: 'idUsuario' // idUsuario es la misma foreignKey que tenes que
         //poner en el modelo de Comentario
      })
    };
  
    return Comentario;
  
  };