module.exports =  function($scope , GamesFactory,){
	
	this.JoinGame = function(){
		this.players.push(GamesFactory.
	}



	this.addGame = function(name){
		this.players.push(GamesFactory.addGame(name));
	};

	this.games = GamesFactory.games;



};

