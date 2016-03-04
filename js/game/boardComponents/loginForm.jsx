var React = require('react');

    var LoginForm = React.createClass({

        newGame: function(e){
            e.preventDefault();

            $(".invite-form").toggle();
        },

        continueGame: function(e){
            e.preventDefault();

            $(".continue-form").toggle();
        },

        addInvitePlayerInput: function(e){
            e.preventDefault();

            if($(".invite-player-input").length < 4) {
                var invitePlayerInput = $("<input>", {
                    class:"invite-player-input",
                    placeholder:"Invite Player"
                });

                $("#startGame").before(invitePlayerInput);
            }
        },

        startGame: function(e){
            e.preventDefault();

            var newGameName = {'data': $("#newGameName").val()};

            $.ajax({
                url: '/setSession',
                dataType: 'text',
                data: newGameName,
                type: 'post',
                cache: false,
                success: function(data){
                    console.log(data);
                }.bind(this),
                error: function(){
                    console.log("No mas");
                }.bind(this)
            });
        },

        enterGame: function(e){
            e.preventDefault();

            console.log(this);
        },

        render: function(){
            console.log("This is loginform's props", this.props);
            //ADD display:none; to .invite-form
            return(
                <div className="form-containers">
                    <form className="login-form">
                        <button id="newGame" onClick={this.newGame}>New</button>
                        <button id="continueGame" onClick={this.continueGame}>Continue</button>
                    </form>

                    <form className="invite-form">
                        <button id="addInvitePlayerInput" onClick={this.addInvitePlayerInput}>+</button>
                        <input className="invite-player-input" placeholder="Invite Player" />
                        <input id="newGameName" placeholder="Enter Game Name" />
                        <button id="startGame" onClick={this.startGame}>Start Game</button>
                    </form>

                    <form className="continue-form">
                        <input id="gameSession" placeholder="Enter Game Name" />
                        <button id="enterGame" onClick={this.enterGame}>Enter</button>
                    </form>
                </div>
            )
        }
    });

    module.exports = LoginForm;
