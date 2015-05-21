module.exports =  function($scope , GamesFactory){
	





	
	
	this.leaveGame = function(index){
		GamesFactory.removePlayerFromGame(index,document.getElementById("tempid").value);
		this.joinedGame = false;
	}
	this.games = GamesFactory.games;


	//this.games; = GamesFactory.games[<?=$_POST['id']?>];



};