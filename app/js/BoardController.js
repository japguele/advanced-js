module.exports =  function($scope,TileFactory){

TileFactory.getTiles("https://mahjongmayhem.herokuapp.com/games/5541fc5b1872631100678bb4/tiles")

this.selectTile = function(){
	//TODO
}
this.getTiles = function(){
	return TileFactory.Tiles;

}
this.matchTiles = function(x,y,z,x2,y2,z2){

	if(document.getElementById( "" + (x) + "" + (y) ).rows[0].cells[z].innerHTML = document.getElementById( "" + (x2) + "" + (y2) ).rows[0].cells[z2].innerHTML){

	 alert("Match");

	}
	 
	 




}
this.getPlayingTiles = function(){
	//TODO get All seeable tiles.
}

this.checkForPossibleMoves = function(){


}
this.getDimensions = function(){
	var tiles = this.getTiles();
	alert(tiles);
	var maxXpos =1;
	var maxYpos =1;
	var maxZpos =1;
	
	for (var i = tiles.length - 1; i >= 0; i--) {
		if(maxXpos < tiles[i].xPos){
			maxXpos = tiles[i].xPos;
		}
		if(maxYpos < tiles[i].yPos){
			maxYpos = tiles[i].yPos;
		}
		if(maxZpos < tiles[i].zPos){
			maxZpos = tiles[i].zPos;
		}
	};
	
	var dimensions = [maxXpos +1 ,maxYpos +1,maxZpos +1];
	return dimensions;	

}
this.createTable = function(){
		
	var table = document.getElementById("GameTable");

	var dimensions = this.getDimensions();
	alert(dimensions[2]);
	
	for (var x = 0 ;x <  (dimensions[0]); x++) {
		
		var row = table.insertRow(x);

			for(var y = 0; y < (dimensions[1]); y++){
				var cell = row.insertCell(y);
				var cellinnerHTML = "<table id=\'x"+x +"y"+y + "\'><tr>"
					cell.innerHTML = "";

				for(var z = 0; z < (dimensions[2]); z++){
				
					cellinnerHTML = cellinnerHTML + " <td></td> ";
				

				}
				cellinnerHTML = cellinnerHTML + "</tr></table>";
				cell.innerHTML = cellinnerHTML;

			}


	}

	alert("loop done");

	
	this.fillTable();
}
this.fillTable = function(){
var tiles = this.getTiles();

for (var i = tiles.length - 1; i >= 0; i--) {


	document.getElementById( "x" + ((tiles[i].xPos) + "y" + (tiles[i].yPos) )).rows[0].cells[(tiles[i].zPos)].innerHTML = "" + tiles[i].tile.suit + tiles[i].tile.name;
	 

		
		for (var z = tiles[i].zPos  - 1; z >= 0; z--) {
			
		
		document.getElementById( "x" + ((tiles[i].xPos) + "y" + (tiles[i].yPos) )).rows[0].cells[z].style = "display:none";
		
		};
	



};

		
	//table2.getElementsByTagName('table').rows[0].cells[2].innerHTML = "top tile";
}



};
	