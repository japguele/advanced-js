module.exports = function($http) {

    var factory = {};

    factory.addGame = function(layout, createdBy, minPlayers, maxPlayers) {}

    factory.addPlayerTogame = function(index, playerid, username) {}

    factory.removePlayerFromGame = function(index, playerid) {}

    factory.getGame = function(gameid, callback) {
        $http.get("https://mahjongmayhem.herokuapp.com/Games/" + gameid)
            .then(function(res) {
                callback(res);
            });
    }

    factory.getGames = function(callback) {
        // body...
        $http.get("https://mahjongmayhem.herokuapp.com/Games")
            .then(function(res) {
                callback(res.data);
            });
    }

    return factory;
}
