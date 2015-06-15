module.exports =  function($scope,TileFactory){

TileFactory.getTiles("https://mahjongmayhem.herokuapp.com/games/5541fc5b1872631100678bb4/tiles")

this.selectTile = function(){
	//TODO
}
this.getTiles = function(){
	return TileFactory.Tiles;

}
this.matchTiles = function(x,y,z,x2,y2,z2){
}
this.getPlayingTiles = function(){
	//TODO get All seeable tiles.
}

this.checkForPossibleMoves = function(){
}

		


};
	