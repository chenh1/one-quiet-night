/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var GameBoard = __webpack_require__(1);

	React.render(React.createElement(GameBoard, null), document.getElementById('gameArea'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var WorldMap = __webpack_require__(3);
	var Outbreaks = __webpack_require__(4);
	var Cures = __webpack_require__(5);
	var PlayerDeck = __webpack_require__(6);
	var Infections = __webpack_require__(7);
	var LoginForm = __webpack_require__(8);
	var StartGameForm = __webpack_require__(9);

	var GameBoardInitialize = React.createClass({
	    displayName: 'GameBoardInitialize',

	    sessionStarted: false,

	    changeSessionState: function changeSessionState() {
	        this.sessionStarted = true;

	        this.componentDidMount();
	    },

	    getInitialState: function getInitialState() {
	        return { data: [] };
	    },

	    componentDidMount: function componentDidMount() {
	        if (this.sessionStarted) {
	            this.dataDump();
	            setInterval(this.dataDump, this.props.pollInterval);
	        }
	    },

	    dataDump: function dataDump() {
	        $.ajax({
	            url: '/test',
	            dataType: 'text',
	            type: 'get',
	            cache: false,
	            success: (function (data) {
	                console.log(data);
	                //this.setState({
	                //  data:data
	                //});
	                //Prepare all of the objects' structures to pass as props down the line
	                //console.log(this.state.data);
	            }).bind(this),
	            error: (function () {
	                console.log("No mas");
	            }).bind(this)
	        });
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'game-board' },
	            React.createElement(WorldMap, null),
	            React.createElement(Outbreaks, null),
	            React.createElement(Cures, null),
	            React.createElement(PlayerDeck, null),
	            React.createElement(Infections, null),
	            React.createElement(LoginForm, { changeSessionState: this.changeSessionState }),
	            React.createElement(StartGameForm, { sessionStarted: this.sessionStarted })
	        );
	    }
	});

	var GameBoard = React.createClass({
	    displayName: 'GameBoard',

	    render: function render() {
	        return React.createElement(GameBoardInitialize, {
	            pollInterval: 2000,
	            pollTimeout: 2000 });
	    }
	});

	module.exports = GameBoard;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var WorldMap = React.createClass({
	    displayName: 'WorldMap',

	    render: function render() {
	        return React.createElement('div', { className: 'world-map' });
	    }
	});

	module.exports = WorldMap;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Outbreaks = React.createClass({
	    displayName: 'Outbreaks',

	    render: function render() {
	        return React.createElement('div', { className: 'outbreaks' });
	    }
	});

	module.exports = Outbreaks;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Cures = React.createClass({
	    displayName: 'Cures',

	    render: function render() {
	        return React.createElement('div', { className: 'cures' });
	    }
	});

	module.exports = Cures;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var PlayerDeck = React.createClass({
	    displayName: 'PlayerDeck',

	    render: function render() {
	        return React.createElement('div', { className: 'player-deck' });
	    }
	});

	module.exports = PlayerDeck;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Infections = React.createClass({
	    displayName: 'Infections',

	    render: function render() {
	        return React.createElement('div', { className: 'infections' });
	    }
	});

	module.exports = Infections;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var LoginForm = React.createClass({
	    displayName: 'LoginForm',

	    login: function login(e) {
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
	            success: function success(data) {
	                if (data == '"granted"') {
	                    console.log(changeSessionState);
	                    changeSessionState();
	                }
	            },
	            error: function error() {
	                console.log("No mas!");
	            }
	        });
	    },

	    register: function register(e) {
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
	            success: function success(data) {
	                console.log(data);
	            },
	            error: function error() {
	                console.log("No mas!");
	            }
	        });
	    },

	    sendReset: function sendReset(e) {
	        e.preventDefault();
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'login-register-container' },
	            React.createElement(
	                'form',
	                { id: 'loginForm' },
	                React.createElement('input', { id: 'usernameLogin', placeholder: 'Enter username or email' }),
	                React.createElement('input', { id: 'passwordLogin', placeholder: 'Enter password' }),
	                React.createElement(
	                    'button',
	                    { id: 'forgotPassword' },
	                    'Forgot Password?'
	                ),
	                React.createElement(
	                    'button',
	                    { id: 'login', onClick: this.login },
	                    'Login'
	                )
	            ),
	            React.createElement(
	                'form',
	                { id: 'forgotLogin' },
	                React.createElement('input', { id: 'sendEmailReset', placeholder: 'Enter email' }),
	                React.createElement(
	                    'button',
	                    { id: 'sendReset', onClick: this.sendReset },
	                    'Send Email'
	                )
	            ),
	            React.createElement(
	                'form',
	                { id: 'registerForm' },
	                React.createElement('input', { id: 'usernameRegister', placeholder: 'Enter username' }),
	                React.createElement('input', { id: 'emailRegister', placeholder: 'Enter email' }),
	                React.createElement('input', { id: 'passwordRegister', placeholder: 'Enter password' }),
	                React.createElement(
	                    'button',
	                    { id: 'register', onClick: this.register },
	                    'Register'
	                )
	            )
	        );
	    }
	});

	module.exports = LoginForm;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	var StartGameForm = React.createClass({
	    displayName: "StartGameForm",

	    newGame: function newGame(e) {
	        e.preventDefault();

	        $(".invite-form").toggle();
	    },

	    continueGame: function continueGame(e) {
	        e.preventDefault();

	        $(".continue-form").toggle();
	    },

	    addInvitePlayerInput: function addInvitePlayerInput(e) {
	        e.preventDefault();

	        if ($(".invite-player-input").length < 4) {
	            var invitePlayerInput = $("<input>", {
	                "class": "invite-player-input",
	                placeholder: "Invite Player"
	            });

	            $("#startGame").before(invitePlayerInput);
	        }
	    },

	    startGame: function startGame(e) {
	        e.preventDefault();

	        var newGameName = { 'data': $("#newGameName").val() };

	        $.ajax({
	            url: '/setSession',
	            dataType: 'json',
	            data: newGameName,
	            type: 'post',
	            cache: false,
	            success: (function (data) {
	                console.log(data);
	            }).bind(this),
	            error: (function () {
	                console.log("No mas");
	            }).bind(this)
	        });
	    },

	    enterGame: function enterGame(e) {
	        e.preventDefault();

	        console.log(this);
	    },

	    render: function render() {
	        //ADD display:none; to .invite-form
	        return React.createElement(
	            "div",
	            { id: "gameForms", className: "form-containers" },
	            React.createElement(
	                "div",
	                { className: "game-session-controls" },
	                React.createElement(
	                    "button",
	                    { id: "newGame", onClick: this.newGame },
	                    "New"
	                ),
	                React.createElement(
	                    "button",
	                    { id: "continueGame", onClick: this.continueGame },
	                    "Continue"
	                )
	            ),
	            React.createElement(
	                "form",
	                { className: "invite-form" },
	                React.createElement(
	                    "button",
	                    { id: "addInvitePlayerInput", onClick: this.addInvitePlayerInput },
	                    "+"
	                ),
	                React.createElement("input", { className: "invite-player-input", placeholder: "Invite Player" }),
	                React.createElement("input", { id: "newGameName", placeholder: "Enter Game Name" }),
	                React.createElement(
	                    "button",
	                    { id: "startGame", onClick: this.startGame },
	                    "Start Game"
	                )
	            ),
	            React.createElement(
	                "form",
	                { className: "continue-form" },
	                React.createElement("input", { id: "gameSession", placeholder: "Enter Game Name" }),
	                React.createElement(
	                    "button",
	                    { id: "enterGame", onClick: this.enterGame },
	                    "Enter"
	                )
	            )
	        );
	    }
	});

	module.exports = StartGameForm;

/***/ }
/******/ ]);