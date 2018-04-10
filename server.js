var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname + '/upload.html'));
});

app.listen(8080);
