var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000);
