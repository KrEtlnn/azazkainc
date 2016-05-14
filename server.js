var express = require('express');
var favicon = require('serve-favicon');
var router = require('./router.js');
var app = express();

var config = {
    port: process.env.PORT || 5000,
};

app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('public/pages/index.html');
});

app.listen(config.port);

console.log('server started on port ' + config.port);