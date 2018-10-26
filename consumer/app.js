
var express = require('express');

var app = express();
var router = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
  });

app.use('/', router);
app.get('/',(req,res)=>{
  res.send("entered app")
})

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
