var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className = "game-board">
            </div>
        )
    }
});


/*
define(['react',
    'jsx!game/loginForm',
    'jsx!game/boardComponents/worldMap',
    'jsx!game/boardComponents/outbreaks',
    'jsx!game/boardComponents/cures',
    'jsx!game/boardComponents/playerDeck',
    'jsx!game/boardComponents/infections'],
    function(React, WorldMap, Outbreaks, Cures, PlayerDeck, Infections) {

    var GameBoardInitialize = React.createClass({

        sessionStarted: false,

        getInitialState: function(){
            return {data:[]};
        },

        componentDidMount: function(){
            if(this.sessionStarted){
                this.dataDump();
                setInterval(this.dataDump, this.props.pollInterval);
            }
        },

        dataDump: function(){
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function(data){
                    this.setState({
                        data:data
                    });

                    //Prepare all of the objects' structures to pass as props down the line
                    console.log(this.state.data);
                }.bind(this),
                error: function(){
                    console.log("No mas");
                }.bind(this)
            });

        },

        render: function(){
                        console.log(this.props);
                        console.log(this.sessionStarted);

            return(
                <div className="game-board">
                    <WorldMap />
                    <Outbreaks />
                    <Cures />
                    <PlayerDeck />
                    <Infections />
                    <LoginForm sessionStarted={this.sessionStarted}/>
                </div>
            )
        }
    });

    var GameBoard = React.createClass({
        render: function(){
            return(
                <GameBoardInitialize
                    url="php/sessionsData.php"
                    pollInterval={2000}
                    pollTimeout={1200}/>
            )
        }
    })

    return GameBoard;

});

*/
