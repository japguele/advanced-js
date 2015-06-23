describe("GameFactory", function() {
	
	// initialize the app
	beforeEach(module('app'));
	var GameFactory;
	var m;
	

	// Inject the modules and get them in global variables
	beforeEach(inject(function($rootScope, $controller, $httpBackend, $injector,_playerMatchedTile_){
		// The scope for the controller
		scope = $rootScope.$new();
		// Get the service which will be injected
		scope.httpBackend = $httpBackend;
		GameFactory = $injector.get('GameFactory');	
		m = _playerMatchedTile_;
	}));

	it('should get Games', function(){

		var games = GameFactory.getGames();

		// When
		scope.httpBackend.flush(); // Voer synchroon uit ipv asynchroon

		// Then
		expect(games).to.not.have.length(0);
	});

	it('should filter tiles that belong to the id of this player', function(){
		var tiles = [{"xPos":9,"yPos":11,"zPos":1,"tile":{"_id":77,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0,"id":"77"},"_id":"5586b293e3d5321100841d4a","match":{"foundBy":"someoneelse","otherTileId":"5586b293e3d5321100841d0f","foundOn":"2015-06-21T14:57:29.620Z"}},{"xPos":25,"yPos":9,"zPos":0,"tile":{"_id":79,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0,"id":"79"},"_id":"5586b293e3d5321100841d0f","match":{"foundBy":"someoneelse","otherTileId":"5586b293e3d5321100841d4a","foundOn":"2015-06-21T14:57:29.620Z"}},{"xPos":25,"yPos":9,"zPos":1,"tile":{"_id":103,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0,"id":"103"},"_id":"5586b293e3d5321100841d49","match":{"foundBy":"jap.guelen@student.avans.nl","otherTileId":"5586b293e3d5321100841d1f","foundOn":"2015-06-21T14:57:24.042Z"}},{"xPos":11,"yPos":13,"zPos":0,"tile":{"_id":101,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0,"id":"101"},"_id":"5586b293e3d5321100841d1f","match":{"foundBy":"jap.guelen@student.avans.nl","otherTileId":"5586b293e3d5321100841d49","foundOn":"2015-06-21T14:57:24.042Z"}}]

		var result = m(tiles,"jap.guelen@student.avans.nl")

		expect(result[0].match.foundBy).to.equals("jap.guelen@student.avans.nl");
		expect(0).to.equals(0);
	})
})
