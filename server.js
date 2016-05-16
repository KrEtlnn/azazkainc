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
app.get('/info', function (req, res) {
    res.sendfile('public/pages/info/index.html');
});
app.get('/members', function (req, res) {
    res.sendfile('public/pages/members/index.html');
});
app.get('/info/kcali.jpg', function (req, res) {
    res.sendfile('public/pages/info/kcali.jpg');
});
app.get('/pics/logo.png', function (req, res) {
    res.sendfile('public/pics/logo.png');
});

app.listen(config.port);

console.log('server started on port ' + config.port);