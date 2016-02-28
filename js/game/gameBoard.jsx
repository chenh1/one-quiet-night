var React = require('react');
var WorldMap = require('./boardComponents/worldMap');
var Outbreaks = require('./boardComponents/outbreaks');
var Cures = require('./boardComponents/cures');
var PlayerDeck = require('./boardComponents/playerDeck');
var Infections = require('./boardComponents/infections');
var LoginForm = require('./boardComponents/loginForm');

var GameBoardInitialize = React.createClass({

    sessionStarted: false,

    getInitialState: function(){
        return {data:[]};
    },

    componentDidMount: function(){
        //if(this.sessionStarted){
            this.dataDump();
            setInterval(this.dataDump, this.props.pollInterval);
        //}
    },

    dataDump: function(){
        $.ajax({
            url: '/gameBoard',
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
                    console.log(this.props);
                    console.log(this.sessionStarted);
        return(
            <div className='game-board'>
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
                pollInterval={2000}
                pollTimeout={2000} />
        )
    }
});

module.exports = GameBoard;

/*
                url = ""
                pollInterval={}
                pollTimeout={}
*/
