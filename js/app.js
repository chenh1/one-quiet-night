require.config({
    baseUrl: "js/",

    paths: {
        "react": "react",
        "JSXTransformer": "JSXTransformer"
    },

    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    }
});

require(['react', 'jsx!game/gameBoard'], function(React, GameBoard){
    GameBoard = React.createElement(GameBoard);

    React.render(
        GameBoard,
        document.getElementById("gameArea")
    );
});




