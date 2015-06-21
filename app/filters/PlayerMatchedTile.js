module.exports = function() {
	return function(items,id) {
   	var filtered = [];

    angular.forEach(items, function(tile) {
    	var tileBelongsToPlayer = false;  
     
    	 if(tile.match.foundBy == id){
          tileBelongsToPlayer = true;
       }
        if(tileBelongsToPlayer) {
         filtered.push(tile);
       }          
      
    });  
    return filtered;  		
  };
}
 


