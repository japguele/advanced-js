	module.exports = function($window) {
			return function(items,bool) {
   		 	var filtered = [];
    		angular.forEach(items, function(item) {
    			var inGame = false;
    			for (var i = item.players.length - 1; i >= 0; i--) {
    				if(item.players[i]._id == $window.sessionStorage.username){
    					inGame = true;
    				}
    			};
          if(!bool){
      			if(!inGame) {
        			filtered.push(item);
      			}
          }else{
              if(inGame) {
              filtered.push(item);
            }
          }
    		});
    		return filtered;
  };
 }


