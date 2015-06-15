module.exports = function(){

	var factory = {};
	
	factory.addGame = function(layout, createdBy,minPlayers,maxPlayers){
		factory.games.push({layout : layout , createdBy : createdBy,minPlayers:minPlayers,maxPlayers:maxPlayers,state : "open", players : [{}] });
			
	}

	factory.addPlayerTogame = function(index,playerid,username){


		var game = factory.games[index];
	
		game.players.push({"id" : playerid,"name" : username});

		
	}
	factory.findById = function(list,id){
		for (var i = list.length - 1; i >= 0; i--) {
			if(list[i].id == id){
				return i
				
			};

		};
	}
	factory.removePlayerFromGame = function(index,playerid){
		var game = factory.games[index];
		var player = game.players.splice(factory.findById(game.players,playerid),1);


	}



	return factory;
}