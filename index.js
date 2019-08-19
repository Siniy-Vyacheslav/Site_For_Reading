const express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    upload = require('express-fileupload'),
    fs = require('fs'),
    favicon = require('serve-favicon');

var text = '';

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon/favicon.jpg'));
app.use(upload());
app.set('view engine', 'ejs');

app.get('/read', (req, res) => {
    res.render('read.ejs', {
        text: text
    });
});

app.get('/upload', (req, res) => {
    res.render('upload.ejs');
});

app.post('/upload', (req, res) => {
    if (req.files) {
        var file = req.files.file,
            filename = file.name;
        
        file.mv('./uploads/' + filename, function(err) {
            if (err) {
                console.log(err);
                res.send('error occured');
            }
        });

        fs.readFile('./uploads/' + filename, 'utf8', function(err, data) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                text = data;
                res.redirect('/read');
            }
        });
    }
});

app.get('/settings', (req, res) => {
    res.render('settings.ejs');
});

http.listen(3000);
