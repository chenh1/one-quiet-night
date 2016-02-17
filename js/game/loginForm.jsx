define(['react'], function(React) {

    var LoginForm = React.createClass({

        render: function(){
            //ADD display:none; to .invite-form
            return(
                <div className = "form-containers">
                    <form className = "login-form">
                        <button id="newGame">New</button>
                        <button>Continue</button>
                    </form>

                    <form className = "invite-form">
                        <button id="addInvitePlayerInput">+</button>
                        <input className="invite-player-input" placeholder="Invite Player" />
                        <button id="executeInvite">Invite Players</button>
                    </form>
                </div>
            )
        }
    });

    $("#gameArea").on("click", "#addInvitePlayerInput", function(e){
        e.preventDefault();

        if($(".invite-player-input").length < 4) {
            var invitePlayerInput = $("<input>", {
                class:"invite-player-input",
                placeholder:"Invite Player"
            });

            $("#executeInvite").before(invitePlayerInput);
        }
    }).on("click", "#newGame", function(e){
        e.preventDefault();

        $(".invite-form").toggle();
    });

    return LoginForm;
});
