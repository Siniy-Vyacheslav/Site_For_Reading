const express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app).listen(3000),
    upload = require("express-fileupload"),
    fs = require('fs'),
    formidable = require('formidable');

app.use(express.static(path.join(__dirname, 'public')));
app.use(upload());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/fileupload', function(req, res) {
    if (req.files) {
        var file = req.files.file,
            filename = file.name;
        
        file.mv('./uploads/' + filename, function(err) {
            if (err) {
                console.log(err);
                res.send('error occured');
            } else {
                res.send('Done!');
            }
        });
    }
});
