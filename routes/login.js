var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('./access');

router.route('/')
    .post(function(req, res) {
        console.log(req.body);

        var usernameOrEmail = req.body.usernameOrEmail,
            password = req.body.password;

        connection.query('SELECT * FROM `user_account` WHERE `password`= "'+password+'" AND (`username` = "'+usernameOrEmail+'" OR `email` = "'+usernameOrEmail+'")', function(err, results) {
            if (err) throw err

            if(results.length == 1) {
                console.log("You are logged in!");

                var message = "granted";

                res.json(message);
            } else {
                var message = "failed";

                res.json(message);
            }
        });
    });

module.exports = router;
