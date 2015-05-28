require('angular/angular');

// Create your app


var gamesController = require('./GamesController');
var gamesFactory = require('./gamesFactory');
var roomController = require('./RoomController');
var boardController = require('./BoardController');
var tileFactory =  require('./TileFactory')
var app = angular.module('app', []);

app.directive('tile', function(){
return {
	restrict: 'E',
	templateUrl: './templates/tile.html',
	controller: function($scope){

	},
	link : function(scope,element ,attrs){}


}
});


app.factory('GamesFactory',gamesFactory);
app.factory('TileFactory',tileFactory);
app.controller('BoardController', boardController);
app.controller('GamesController' , gamesController);
app.controller('RoomController' , roomController);

