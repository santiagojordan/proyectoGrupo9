var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');




var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var detalleRouter = require('./routes/detalle');
var loginRouter = require('./routes/login');
var miPerfilRouter = require('./routes/miPerfil');
var registracionRouter = require('./routes/registracion');
var resultadosBusquedaRouter = require('./routes/resultadoBusqueda');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //Aca en estas dos lineas le estamos diciendo a express que busque nuestras vistas, y que nuestras vistas van a trabajar con EJS.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "Shh, es un secreto"
}));



app.use('/index', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/detalle', detalleRouter);
app.use('/login', loginRouter);
app.use('/miPerfil', miPerfilRouter);
app.use('/registracion', registracionRouter);
app.use('/resultadosBusqueda', resultadosBusquedaRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
