module.exports = function($http) {
    var factory = {}
    var selectedTile = null;
    factory.Tiles = "error no data loaded";

    factory.getTiles = function(url) {
        $http.get(url)
            .then(function(res) {
                factory.Tiles = res.data;
            });
    }

    factory.returnTiles = function(){
    	return factory.Tiles;
    }

    factory.getSelectedTile = function() {
    	return factory.selectedTile;
    }

    return factory;
}
