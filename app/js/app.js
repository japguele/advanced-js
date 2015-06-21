require('angular/angular');
require('angular-ui-router/release/angular-ui-router.js');


// Create your app


var gamesController = require('./GamesController');
var gameFactory = require('./GameFactory');
var roomController = require('./RoomController');
var boardController = require('./BoardController');
var tileFactory =  require('./TileFactory');
var loginController = require('./LoginController');
var app = angular.module('app', ['ui.router']);
var inGamefilter = require('../filters/InGame');
var playerMatchedTile = require('../filters/PlayerMatchedTile');
var createdByMe = require('../filters/CreatedByMe');





app.directive('tile', function(){
return {
    restrict: 'E',
    templateUrl: './templates/tile.html',
    controller: function($scope){

    },
    link : function(scope,element ,attrs){}


}
});
app.directive('matchedtile', function(){
return {
    restrict: 'E',
    templateUrl: './templates/matchedTile.html',
    controller: function($scope){

    },
    link : function(scope,element ,attrs){



    }


}
});


app.factory('httpRequestInterceptor', [ '$window' , function ($window) {
    return {     
        request: function (config) { 

          if($window.sessionStorage.token) {
            
              config.headers['x-username'] = $window.sessionStorage.username;

              config.headers['x-token'] = $window.sessionStorage.token;

          }
         
          return config;
        }
    }
}]);

app.config([ '$httpProvider', function($httpProvider)
{
    $httpProvider.interceptors.push('httpRequestInterceptor');
}]);



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


   app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
   
     
      // For any unmatched url, send to /route1
  
      
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
         .state('login', {
            url: '/login',    
                  
            controller: "LoginController as login"
           
        })     
         .state('logout', {
            url: '/logout',    
                  
            controller: "LoginController as login"
           
        })          
         $urlRouterProvider.otherwise("/games");
    })
app.filter('createdByMe',createdByMe);
app.filter('inGame',inGamefilter); 
app.filter('playerMatchedTile',playerMatchedTile);     
app.factory('GameFactory',gameFactory);
app.factory('TileFactory',tileFactory);
app.controller('BoardController', boardController);
app.controller('GamesController' , gamesController);
app.controller('RoomController' , roomController);
app.controller('LoginController' , loginController);

