require.config({
    baseUrl: "js/",

    paths: {
        "react": "react",
        "reactDOM": "reactDOM",
        "JSXTransformer": "JSXTransformer"
    },

    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    }
});

//Test here
var React = require('react');
var ReactDOM = require('reactDOM');
var GameBoard = require('jsx!game/gameBoard');

GameBoard = React.createElement(GameBoard);

ReactDOM.render(
    GameBoard,
    document.getElementById("gameArea")
);

/*
require(['react', 'reactDOM', 'jsx!game/gameBoard'], function(React, ReactDOM, GameBoard){
    GameBoard = React.createElement(GameBoard);

    ReactDOM.render(
        GameBoard,
        document.getElementById("gameArea")
    );
});
*/



