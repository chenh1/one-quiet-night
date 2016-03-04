var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '.')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var session = require('./routes/session');
app.use('/setSession', session);

var test = require('./routes/test');
app.use('/test', test);

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
