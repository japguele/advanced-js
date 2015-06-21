module.exports = function($scope, GameFactory, $http, $q) {
    var scope = this;
    this.games = {};

    this.init = function() {
        this.games = this.getGames();
    }

<<<<<<< HEAD

    this.createGame = function(gamedata){
        var layout = gamedata.layout
        var min = gamedata.min
        var max = gamedata.max       
        GameFactory.createGame(layout,min,max,function(status){
            scope.getGames()

        });
    
    };
=======
    this.createGame = function(){
        var layout = document.getElementById("layout").value;
        var minPlayers = document.getElementById("minplayers").value;
        var maxPlayers = document.getElementById("maxplayers").value;
        GameFactory.createGame(layout, minPlayers, maxPlayers);
    }

>>>>>>> origin/master
    this.joinGame = function(gameid){
        
        
        
        GameFactory.getGame(gameid,function(res){
             GameFactory.addSelfTogame(res.data);
             
                scope.getGames()

             
        });

       
    }

    this.startGame = function(gameid){

        $http.post("https://mahjongmayhem.herokuapp.com/Games/"+  gameid + "/Start", {})
                .success(function(data, status, headers, config) {

                console.log('success', data, status);
                this.getGames();
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
