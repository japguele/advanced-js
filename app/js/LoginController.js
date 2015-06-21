module.exports =  function($scope , $window,$location){

		if($location.path() == '/login'){ // login
			console.log("log in");
		
			$window.sessionStorage.username = $location.search().username;

			$window.sessionStorage.token = $location.search().token;
			console.log($window.sessionStorage.username);
			
			$location.path('/games');
			
		} else if($location.path() == '/logout')
		{ 
			$window.sessionStorage.clear();
			$location.path('/games');
		}

	}