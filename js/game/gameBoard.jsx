define(['react', 'jsx!game/test2'], function(React, MainSheet) {
    var GameBoardInitialize = React.createClass({
        getInitialState: function(){
            return {data:[]};
        },

        componentDidMount: function(){
            this.accesstest();
            setInterval(this.accesstest, this.props.pollInterval);
        },

        accesstest: function(){
            var x = 1;
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function(data){
                    console.log(data);
                    this.setState({
                        data:[data]
                    });
                }.bind(this),
                error: function(){
                    console.log("No mas");
                }.bind(this)
            });
        },

        render: function(){
            return(
                <div className = "game-board">
                    hello
                    <MainSheet 
                        data={this.state.data} />
                </div>
            );
        }
    });

    var GameBoard = React.createClass({
        render: function(){
            return(
                <GameBoardInitialize
                    url="php/test.php"
                    pollInterval={2000}
                    pollTimeout={400}/>
            )
        }
    })

    return GameBoard;

});
