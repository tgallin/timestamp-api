var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/:timestamp', function(req, res, next) {
    var ts = req.params.timestamp;
    if (ts) {
        console.log(ts);
        res.end(ts);
    }
});

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Timestamp microservice',
        message: 'Timestamp microservice'
    });
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('app listening on port ' + port);
});
