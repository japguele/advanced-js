module.exports = function($scope, TileFactory, GameFactory, $stateParams,$http) {
    var scope = this;
    this.gameId = $stateParams.gameid;

    this.unmatchedTiles = {};
    this.matchedTiles = {}

    this.init = function() {
        scope.game = GameFactory.getGame(this.gameId, function(res){
            scope.game = res.data;
        });

        TileFactory.getTiles(this.gameId, "false" ,function(res) {
            scope.unmatchedTiles = res;
        });
        TileFactory.getTiles(this.gameId, "true" ,function(res) {
            scope.matchedTiles = res;
        });
    }

    var selectedTile = null;

    $scope.selectTile = function(tile) {

        if($scope.checkForPossibleMoves()){

            var selectable = this.checkSelectableTile(tile);

            if (selectable == true) {
                if (selectedTile == null) {
                    tile.selected = true;
                    selectedTile = tile;
                } else {
                    var isMatch = this.matchTiles(selectedTile, tile);

                    if (isMatch == true) {
                        console.log("Een match!");
                        // HIER DE MATCH POSTEN MET TILE 'selectedTile' en 'tile'
                        $http.post("https://mahjongmayhem.herokuapp.com/Games/"+  $stateParams.gameid + "/Tiles/matches", 
                        { 
                            "tile1Id": selectedTile._id ,
                            "tile2Id": tile._id
                        })
                        .success(function(data, status, headers, config) {
                            console.log('success', data, status);
                        }).error(function(data, status, headers, config) {
                            console.log('error', data, status);
                        }).catch(function(error){
                            console.log('catch', error);
                        });
                    } else {
                        selectedTile.selected = false;
                        selectedTile = null;

                        console.log("Dit is geen match!");
                    }
                }
            } else {
                console.log("Deze tile kan niet geselecteerd worden.");
            }
            $scope.checkForPossibleMoves();
        }
    }

    $scope.checkSelectableTile = function(tile) {
        var allTiles = scope.unmatchedTiles;

        var detectedTilesRight = [];
        var detectedTilesLeft = [];
        var detectedTilesOnTop = [];

        var selectable = false;

        allTiles.forEach(function(entry) {
            if (tile.xPos + 2 == entry.xPos && tile.yPos - 2 < entry.yPos && tile.yPos + 2 > entry.yPos && tile.zPos == entry.zPos) {
                detectedTilesRight.push(entry);
            } else if (tile.xPos - 2 == entry.xPos && tile.yPos - 2 < entry.yPos && tile.yPos + 2 > entry.yPos && tile.zPos == entry.zPos) {
                detectedTilesLeft.push(entry);
            }

            if (tile.xPos == entry.xPos || tile.xPos + 1 == entry.xPos || tile.xPos - 1 == entry.xPos) {
                if (tile.yPos == entry.yPos || tile.yPos + 1 == entry.yPos || tile.yPos - 1 == entry.yPos) {
                    if (tile.zPos < entry.zPos) {
                        detectedTilesOnTop.push(entry);
                    }
                }
            }
        });

        if (detectedTilesOnTop.length == 0) {
            if (detectedTilesRight.length == 0 || detectedTilesLeft.length == 0) {
                selectable = true;
            }
        }

        return selectable;
    }


    $scope.matchTiles = function(tile1, tile2, showinfo) {
        var isMatch = false;

        if (tile1 != tile2) {
            if (tile1.tile.suit == tile2.tile.suit) {
                if (tile1.tile.matchesWholeSuit == false || tile2.tile.matchesWholeSuit == false) {
                    if (tile1.tile.name == tile2.tile.name) {
                        isMatch = true;
                    } else {
                        if(showinfo)
                            console.log("Naast de suit moet bij deze tile ook de name overeen komen. Dit is niet het geval.");
                    }
                } else {
                    isMatch = true;
                }
            } else {
                if(showinfo)
                    console.log("De suit komt niet overeen.");
            }
        } else {
            if(showinfo)
                console.log("Je kunt niet 2 dezelfde tiles matchen!");
        }

        return isMatch;
    }

    $scope.checkForPossibleMoves = function() {
        var movePossible = false;

        var allTiles = scope.tiles;
        var allSelectableTiles = [];
        var allCombinations = [];

        allTiles.forEach(function(tile){
            if($scope.checkSelectableTile(tile)){
                allSelectableTiles.push(tile);
            }
        });

        allSelectableTiles
            .slice(0, allSelectableTiles.length - 1)
            .forEach(function (first, n) {
                var tail = allSelectableTiles.slice(n + 1, allSelectableTiles.length);
                tail.forEach(function (item) {
                    allCombinations.push([first, item]);
                });
        });

        allCombinations.forEach(function(combination){
            var match = $scope.matchTiles(combination[0], combination[1], false);
            if(match){
                movePossible = true;
            }
        });

        if(!movePossible)
            alert("Er is geen move meer mogelijk.");

        return movePossible;
    }
};
