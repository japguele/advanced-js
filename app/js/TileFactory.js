module.exports = function($http){
var factory = {};
factory.Tiles = "error no data loaded";

factory.getTiles = function(url){
	
$http.get(url)
       .then(function(res){
       	
        factory.Tiles = res.data;                
        });

}
return factory



}