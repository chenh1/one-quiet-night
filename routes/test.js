var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('./access');

router.route('/')
    .get(function(req, res) {

    connection.query('SELECT * FROM `cities` WHERE 1', function(err, results) {
        if (err) throw err
        res.json(results);
    });

});

module.exports = router;
