var React = require('react');

var LoginForm = React.createClass({
    login: function(e) {
        e.preventDefault();

        var loginInfo = {
            'usernameOrEmail': $("#usernameLogin").val(),
            'password': $("#passwordLogin").val()
        };

        var changeSessionState = this.props.changeSessionState;

        $.ajax({
            url: '/login',
            dataType: 'text',
            data: loginInfo,
            type: 'post',
            cache: false,
            success: function(data){
                if(data == '"granted"') {
                    console.log(changeSessionState);
                    changeSessionState(loginInfo.usernameOrEmail);
                }
            },
            error: function(){
                console.log("No mas!");
            }
        });
    },

    register: function(e) {
        e.preventDefault();

        var registerInfo = {
            'username': $("#usernameRegister").val(),
            'email': $("#emailRegister").val(),
            'password': $("#passwordRegister").val()
        };

        $.ajax({
            url: '/register',
            dataType: 'text',
            data: registerInfo,
            type: 'post',
            cache: false,
            success: function(data){
                console.log(data);
            },
            error: function(){
                console.log("No mas!");
            }
        });
    },

    sendReset: function(e) {
        e.preventDefault();
    },

    render: function() {
        return (
            <div className="login-register-container">
                <form id="loginForm">
                    <input id="usernameLogin" placeholder="Enter username or email" />
                    <input id="passwordLogin" placeholder="Enter password" />
                    <button id="forgotPassword">Forgot Password?</button>
                    <button id="login" onClick={this.login}>Login</button>
                </form>

                <form id="forgotLogin">
                    <input id="sendEmailReset" placeholder="Enter email" />
                    <button id="sendReset" onClick={this.sendReset}>Send Email</button>
                </form>

                <form id="registerForm">
                    <input id="usernameRegister" placeholder="Enter username" />
                    <input id="emailRegister" placeholder="Enter email" />
                    <input id="passwordRegister" placeholder="Enter password" />
                    <button id="register" onClick={this.register}>Register</button>
                </form>
            </div>
        )
    }
});

module.exports = LoginForm;
