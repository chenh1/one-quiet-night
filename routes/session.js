var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('./access');

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

router.route('/')
    .post(function(req, res) {

        //req.body contains the data sent from the ajax call
        console.log(req.body.data);

        var session_password = req.body.data,
            player_cards,
            infection_cards;

        connection.query('SELECT `session_password` FROM `game_session` WHERE `session_password` = "'+session_password+'"', function(err, results) {
            if (err) throw err
            //res.json(results);

            if (results.length == 0) {
                console.log(results);

                var session_id;

                connection.query('INSERT INTO `game_session` (session_password) VALUES ("'+session_password+'")', function(err, results) {
                    if (err) throw err
                });

                //Get the session id from the DATABASE (not the inputted value)
                connection.query('SELECT `id` FROM `game_session` WHERE `session_password` = "'+session_password+'"', function(err, results) {
                    if (err) throw err

                    session_id = results[0].id;
                    console.log(session_id);

                    //Get all cards to populate card session
                    connection.query('SELECT * FROM `player_cards` WHERE 1', function(err, results) {
                        if (err) throw err

                        player_cards = results;
                        player_cards = shuffle(player_cards);

                        //Start player cards session
                        for (var i = 0, player_cards_length = player_cards.length; i < player_cards_length; i++) {
                            connection.query('INSERT INTO `player_cards_session` (card_id, deck_order, session_id) VALUES ("'+
                                player_cards[i].id+'", "'+i+'", "'+session_id+'")', function(err, results) {
                                    if (err) throw err

                                    console.log(results);
                            });
                        }
                    });

                    //Get all cities to populate infection card session
                    connection.query('SELECT * FROM `cities` WHERE 1', function(err, results) {
                        if (err) throw err

                        infection_cards = results;
                        infection_cards = shuffle(infection_cards);
                        console.log(infection_cards);

                        //Start infection cards session
                        for (var i = 0, infection_cards_length = infection_cards.length; i < infection_cards_length; i++) {
                            connection.query('INSERT INTO `infection_cards_session` (infection_id, deck_order, session_id) VALUES ("'+
                                infection_cards[i].id'", "'+i+'", "'+session_id+'")', function(err, results) {
                                    if(err) throw err

                                    console.log(results);
                            });
                        }
                    })
                });



            } else {
                console.log("This session already exists");
            }
        });
    });

module.exports = router;
