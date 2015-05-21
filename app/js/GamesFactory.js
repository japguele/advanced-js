module.exports = function(){

	var factory = {};
	factory.games = [
	{
"id" : "0",
 "layout": "snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'

 "createdOn": "date", // date + time

 "startedOn": "date", // date + time

 "endedOn": "date", // date + time

 "createdBy": {

   "id": "string", // Avans username

   "name": "jaap", // fullname

   "email": "string", // avans e-mail

   "nickname": "string" // maybe filled later?

 },

 "minPlayers": "number", // 35 <= x >= 1, Required number of players to start

 "maxPlayers": "number",  // 35 <= x >= 1

 "players": [{

   "id": "string", // Avans username

   "name": "heyo", // fullname

   "email": "string", // avans e-mail

   "nickname": "string" // maybe filled later?

   // Properties like score and isWinner maybe filled later

 }],

 "state": "open" // -> 'open'|'playing'|'finished'

},
	{
"id" : "1",
 "layout": "snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'

 "createdOn": "date", // date + time

 "startedOn": "date", // date + time

 "endedOn": "date", // date + time

 "createdBy": {

   "id": "string", // Avans username

   "name": "ja", // fullname

   "email": "string", // avans e-mail

   "nickname": "string" // maybe filled later?

 },

 "minPlayers": "number", // 35 <= x >= 1, Required number of players to start

 "maxPlayers": "number",  // 35 <= x >= 1

 "players": [{

   "id": "string", // Avans username

   "name": "string", // fullname

   "email": "string", // avans e-mail

   "nickname": "string" // maybe filled later?

   // Properties like score and isWinner maybe filled later

 }],

 "state": "playing" // -> 'open'|'playing'|'finished'

}
	];
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