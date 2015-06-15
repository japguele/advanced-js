module.exports = function($scope, GamesFactory, $http) {
    this.joinedGame = false;

    this.getGames = function() {
        alert("lala");
        $http.get("https://mahjongmayhem.herokuapp.com/Games")
            .then(function(res) {
                GamesFactory.Games = res;
            });

    }

    this.addGame = function() {
        GamesFactory.addGame(document.getElementById("layout").selected, {
            name: document.getElementById("name").value
        }, document.getElementById("minplayers").value, document.getElementById("maxplayers").value);
    };

    this.joinGame = function(index) {
        this.joinedGame = true;
        GamesFactory.addPlayerTogame(index, document.getElementById("tempid").value, document.getElementById("name").value);
    }

    this.leaveGame = function(index) {
        GamesFactory.removePlayerFromGame(index, document.getElementById("tempid").value);
        this.joinedGame = false;
    }

    this.games = GamesFactory.games;
};
