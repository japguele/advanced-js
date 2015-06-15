require('angular/angular');
require('angular-route/angular-route.js');

// Create your app


var gamesController = require('./GamesController');
var gamesFactory = require('./gamesFactory');
var roomController = require('./RoomController');
var boardController = require('./BoardController');
var tileFactory =  require('./TileFactory')
var app = angular.module('app', ['ngRoute']);

app.directive('tile', function(){
return {
	restrict: 'E',
	templateUrl: './templates/tile.html',
	controller: function($scope){

	},
	link : function(scope,element ,attrs){}


}
});

app.config(function($routeProvider){
	$routeProvider.
		when('/games' , {
			templateUrl: "templates/games.html",
			controller: "GamesController as games"

		}).
		when('/game' , {
			templateUrl: "templates/game.html",
			controller: "BoardController as board"

		}).
		otherwise({
			redirectTo: "/hay"
		});



});

app.factory('GamesFactory',gamesFactory);
app.factory('TileFactory',tileFactory);
app.controller('BoardController', boardController);
app.controller('GamesController' , gamesController);
app.controller('RoomController' , roomController);

