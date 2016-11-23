var express = require('express');
var chrono = require('chrono-node');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

// natural date format options
var options = {
    year: "numeric",
    month: "long",
    day: "numeric"
};

app.get('/:timestamp', function(req, res, next) {
    var ts = req.params.timestamp;
    var date;
    var unixtime = null;
    var naturaltime = null;
    if (ts) {
        var isnum = /^\d+$/.test(ts);
        if (isnum) {
            date = new Date(ts);

        }
        else {
            // if ts is not valid, it will return undefined
            date = chrono.parseDate(ts);
        }
    }
    if (date) {
        unixtime = date.getTime();
        naturaltime = date.toLocaleString("en-US", options);
    }
    var result = {
        unix: unixtime,
        natural: naturaltime
    };
    res.json(result);
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
