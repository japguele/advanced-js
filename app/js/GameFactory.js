module.exports = function($http,$window){

    var factory= {};
    factory.addGame = function(layout, createdBy,minPlayers,maxPlayers){

        
    }

    factory.addSelfTogame = function(game){
        alert("https://mahjongmayhem.herokuapp.com/Games/"+ game.id + "/Players");
    
       if($window.sessionStorage.username) {
        if(game.players.length < game.maxPlayers){
            var didJoin = false;
            for (var i = game.players.length - 1; i >= 0; i--) {
                console.log(game.players[i]);
                if(game.players[i]._id== $window.sessionStorage.username){
                    didJoin = true;
                }
            };
            if(!didJoin){

                $http.post("https://mahjongmayhem.herokuapp.com/Games/"+  game.id + "/Players", {})
                .success(function(data, status, headers, config) {
                console.log('success', data, status);
            }).error(function(data, status, headers, config) {
                console.log('error', data, status);
            }).catch(function(error){
                console.log('catch', error);
            });

            }else{
                alert("u zit al in dit spel");
            }
        }else{
            alert("te veel spelers");
        }

       }else{
        alert("u ben niet ingelogd");
       }


        



       
        
    }

    factory.removeSelfFromGame = function(){
        


    }
    factory.getGame = function(gameid,callback){
                $http.get("https://mahjongmayhem.herokuapp.com/Games/" + gameid)
            .then(function(res){
            callback(res);
       });
    }
    factory.getGames = function(callback) {
        // body...
        $http.get("https://mahjongmayhem.herokuapp.com/Games")
        .then(function(res){

            callback(res.data);
        
       });

    }



    return factory;
}