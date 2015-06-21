require('angular/angular');
require('angular-ui-router/release/angular-ui-router.js');


// Create your app


var gamesController = require('./GamesController');
var gameFactory = require('./GameFactory');
var roomController = require('./RoomController');
var boardController = require('./BoardController');
var tileFactory =  require('./TileFactory');
var appController = require('./AppController');
var app = angular.module('app', ['ui.router']);


app.directive('tile', function(){
return {
    restrict: 'E',
    templateUrl: './templates/tile.html',
    controller: function($scope){

    },
    link : function(scope,element ,attrs){}


}
});
/*
app.config(function($routeProvider){
    $routeProvider.
    state
        when('/games' , {
            templateUrl: "templates/games.html",
            controller: "GamesController as Games"
            resolve: {
                games: function(){

                }
            }

        }).
        when('/game' , {
            templateUrl: "templates/game.html",
            controller: "BoardController as board"

        }).
        when('/creategame' , {
            templateUrl: "templates/creategame.html",
            controller: "GamesController as games"

        }).
        otherwise({
            redirectTo: "/hay"
        });



});*/

   app.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.when("", "/games");
      $urlRouterProvider.when("/", "/games");
     
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/games");
      
      $stateProvider
        .state('gameboard', {
            url: '/games/:gameid',
            templateUrl: 'templates/game.html', 
            controller: "BoardController as board"          
        })
        .state('games', {
            url: '/games',
            // loaded into ui-view of parent's template
            templateUrl: 'templates/games.html',
            controller: "GamesController as games"
           
        })        
    })
app.factory('GameFactory',gameFactory);
app.factory('TileFactory',tileFactory);
app.controller('AppController', appController);
app.controller('BoardController', boardController);
app.controller('GamesController' , gamesController);
app.controller('RoomController' , roomController);