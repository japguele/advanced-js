module.exports = function($scope, TileFactory) {

    var selectedTile = null;

    TileFactory.getTiles("https://mahjongmayhem.herokuapp.com/games/5541fc5b1872631100678bb4/tiles");

    $scope.selectTile = function(tile) {
        var selectable = this.checkSelectableTile(tile);

        if(selectable == true){
            if(selectedTile == null){
                tile.selected = true;
                selectedTile = tile;
            } else {
                var isMatch = this.matchTiles(selectedTile, tile);

                if(isMatch == true){
                    console.log("Een match!");
                    // HIER DE MATCH POSTEN MET TILE 'selectedTile' en 'tile'
                } else {
                    selectedTile.selected = false;
                    selectedTile = null;

                    console.log("Dit is geen match!");
                }
            }
        } else {
            console.log("Deze tile kan niet geselecteerd worden.");
        }
    }

    $scope.checkSelectableTile = function(tile){
        var allTiles = TileFactory.returnTiles();

        var detectedTilesRight = [];
        var detectedTilesLeft = [];
        var detectedTilesOnTop = [];

        var selectable = false;

        allTiles.forEach(function(entry) {
            if(tile.xPos + 2 == entry.xPos && tile.yPos - 2 < entry.yPos && tile.yPos + 2 > entry.yPos && tile.zPos == entry.zPos){
                detectedTilesRight.push(entry);
            } else if (tile.xPos - 2 == entry.xPos && tile.yPos - 2 < entry.yPos && tile.yPos + 2 > entry.yPos && tile.zPos == entry.zPos){
                detectedTilesLeft.push(entry);
            }

            if(tile.xPos == entry.xPos || tile.xPos + 1 == entry.xPos || tile.xPos - 1 == entry.xPos){
                if(tile.yPos == entry.yPos || tile.yPos + 1 == entry.yPos || tile.yPos - 1 == entry.yPos){
                    if(tile.zPos < entry.zPos){
                        detectedTilesOnTop.push(entry);
                    }
                }
            }
        });

        //console.log("Left:");
        //console.log(detectedTilesLeft);
        //console.log("Right:");
        //console.log(detectedTilesRight);
        //console.log("On Top:");
        //console.log(detectedTilesOnTop);
        //console.log("This tile:");
        //console.log(tile);

        if(detectedTilesOnTop.length == 0){
            if(detectedTilesRight.length == 0 || detectedTilesLeft.length == 0){
                selectable = true;
            }
        }
        
        return selectable;
    }

    this.getTiles = function() {
        return TileFactory.Tiles;
    }

    $scope.matchTiles = function(tile1, tile2) {
        var isMatch = false;

        if(tile1 != tile2){
            if(tile1.tile.suit == tile2.tile.suit){
                if(tile1.tile.matchesWholeSuit == false || tile2.tile.matchesWholeSuit == false){
                    if(tile1.tile.name == tile2.tile.name){
                        isMatch = true;
                    } else {
                        console.log("Naast de suit moet bij deze tile ook de name overeen komen. Dit is niet het geval.");
                    }
                } else {
                    isMatch = true;
                }
            } else {
                console.log("De suit komt niet overeen.");
            }
        } else {
            console.log("Je kunt niet 2 dezelfde tiles matchen!");
        }

        return isMatch;
    }

    this.getPlayingTiles = function() {
        //TODO get All seeable tiles.
    }

    this.checkForPossibleMoves = function() {}
};
