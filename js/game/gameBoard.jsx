define(['react', 'jsx!game/test2'], function(React, MainSheet) {
    MainSheet = React.createElement(MainSheet);

    var GameBoard = React.createClass({
        render: function(){
            return(
                <div className = "game-board">
                    hello
                    {MainSheet}
                </div>
            );
        }
    });

    return GameBoard;

});
