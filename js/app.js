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

require(['react', 'reactDOM', 'jsx!game/gameBoard'], function(React, ReactDOM, GameBoard){
    GameBoard = React.createElement(GameBoard);

    ReactDOM.render(
        GameBoard,
        document.getElementById("gameArea")
    );
});




