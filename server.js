var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.end('hello world');
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('app listening on port ' + port);
});
