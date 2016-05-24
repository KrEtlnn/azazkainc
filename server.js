var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var fs = require('fs');
var router = require('./router.js');
var app = express();

var config = {
    port: process.env.PORT || 5000,
};

app.use(bodyParser.urlencoded());
app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('public/pages/members/index.html');
});
app.get('/info', function (req, res) {
    res.sendfile('public/pages/info/index.html');
});
app.get('/members', function (req, res) {
    res.sendfile('public/pages/members/index.html');
});
app.get('/commanders', function (req, res) {
    res.sendfile('public/pages/commanders/index.html');
});
app.get('/offices', function (req, res) {
    res.sendfile('public/pages/offices/index.html');
});
app.get('/feedback', function (req, res) {
    res.sendfile('public/pages/feedback/index.html');
});
app.get('/info/kcali.jpg', function (req, res) {
    res.sendfile('public/pages/info/kcali.jpg');
});
app.get('/pics/logo.png', function (req, res) {
    res.sendfile('public/pics/logo.png');
});
app.get('/givemefeedbackfile', function (req, res) {
    res.sendfile('public/pages/feedback/download/index.html');
});
app.get('/public/pages/feedback/download/feedback.txt', function (req, res) {
    res.sendfile('public/pages/feedback/download/feedback.txt');
});
app.get('/map.jpg', function (req, res) {
    res.sendfile('public/pages/offices/map.jpg');
});

app.post('/feedback', function (req, res){
    console.log(req.body);
    fs.appendFile('public/pages/feedback/download/feedback.txt', "\n\nname: " + req.body.username + " \ncontacts: " + req.body.contacts + " \nmessage: " + req.body.message, function () {
    });
    console.log('NEW MESSAGE' + "\nname: " + req.body.username + " \ncontacts: " + req.body.contacts + " \nmessage: " + req.body.message)
    res.sendfile('public/pages/feedback/thanks.html');
})

app.listen(config.port);
console.log('server started on port ' + config.port);