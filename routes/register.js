var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('./access');

router.route('/')
    .post(function(req, res) {
        console.log(req.body);

        var username = req.body.username,
            email = req.body.email,
            password = req.body.password;

        connection.query('SELECT * FROM `user_account` WHERE `username`= "'+username+'"', function(err, results) {
            if (err) throw err

            if(results.length == 0) {
                connection.query('SELECT * FROM `user_account` WHERE `email`="'+email+'"', function(err, results) {
                    if (err) throw err

                    if(results.length == 0) {
                        connection.query('INSERT INTO `user_account` (username, email, password) VALUES ("'+
                            username+'", "'+email+'", "'+password+'")', function(err, results) {
                            if (err) throw err

                            console.log(results);
                        });
                    } else {
                        console.log("An account is already registered under this email address");
                    }
                });
            } else {
                console.log("An account is already register under this username");
            }
        });
    });

module.exports = router;
