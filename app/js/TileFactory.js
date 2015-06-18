module.exports = function($http) {
    var factory = {}
    var selectedTile = null;
    factory.Tiles = "error no data loaded";

    factory.getTiles = function(id,matched,callback) {
        $http.get("https://mahjongmayhem.herokuapp.com/Games/" + id + "/tiles?matched=" + matched + "")
            .then(function(res) {
                callback(res.data);
            });
        
    }

    
    factory.returnTiles = function() {
        return factory.Tiles;
    }

    factory.getSelectedTile = function() {
        return factory.selectedTile;
    }
    

    return factory;
}
