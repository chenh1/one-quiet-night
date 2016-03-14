var React = require('react');
var WorldMap = require('./boardComponents/worldMap');
var Outbreaks = require('./boardComponents/outbreaks');
var Cures = require('./boardComponents/cures');
var PlayerDeck = require('./boardComponents/playerDeck');
var Infections = require('./boardComponents/infections');
var LoginForm = require('./boardComponents/loginForm');
var StartGameForm = require('./boardComponents/startGameForm');

var GameBoardInitialize = React.createClass({

    player: '',

    sessionStarted: false,

    changeSessionState: function(usernameOrEmail) {
        //Need to set state this to true so it saves on refresh
        this.sessionStarted = true;

        this.player = usernameOrEmail;

        this.componentDidMount();
    },

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
            url: '/test',
            dataType: 'text',
            type: 'get',
            cache: false,
            success: function(data){
                console.log(data);
                //this.setState({
                  //  data:data
                //});
                //Prepare all of the objects' structures to pass as props down the line
                //console.log(this.state.data);
            }.bind(this),
            error: function(){
                console.log("No mas");
            }.bind(this)
        });
    },

    render: function(){
        return(
            <div className='game-board'>
                <WorldMap />
                <Outbreaks />
                <Cures />
                <PlayerDeck />
                <Infections />
                <LoginForm changeSessionState={this.changeSessionState} />
                <StartGameForm player={this.player} />
            </div>
        )
    }
});

var GameBoard = React.createClass({
    render: function(){
        return(
            <GameBoardInitialize
                pollInterval={2000}
                pollTimeout={2000} />
        )
    }
});

module.exports = GameBoard;
