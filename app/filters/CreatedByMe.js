module.exports = function($window) {
			return function(items,bool) {
   		 	var filtered = [];
    		angular.forEach(items, function(item) {
    			var createdByMe = false;
    			if(item.createdBy._id == $window.sessionStorage.username){
    					createdByMe = true;
    			}
    			
          if(!bool){
      			if(!createdByMe) {
        			filtered.push(item);
      			}
          }else{
              if(createdByMe) {
              filtered.push(item);
            }
          }
    		});
    		return filtered;
  };
}