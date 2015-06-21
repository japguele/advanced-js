module.exports = function($scope, GameFactory, $http, $q) {
    var scope = this;
    
    this.joinedGame = false;

    this.games = {};

    this.init = function() {
        this.games = this.getGames();
    }

    this.createGame = function(){
        var layout = document.getElementById("layout").value;
        var minPlayers = document.getElementById("minplayers").value;
        var maxPlayers = document.getElementById("maxplayers").value;
        GameFactory.createGame(layout, minPlayers, maxPlayers);
    }

    this.joinGame = function(gameid){
        this.joinedGame = true;
        
        alert(gameid);
        GameFactory.getGame(gameid,function(res){
             GameFactory.addSelfTogame(res.data);
        });
       
    }

    this.startGame = function(gameid){

        $http.post("https://mahjongmayhem.herokuapp.com/Games/"+  gameid + "/Start", {})
                .success(function(data, status, headers, config) {
                console.log('success', data, status);
                }).error(function(data, status, headers, config) {
                console.log('error', data, status);
            }).catch(function(error){
                console.log('catch', error);
            });
    } 

    this.getGames = function() {
        GameFactory.getGames(function(res) {
            scope.games = res;
        })
    };
    this.init();
}
