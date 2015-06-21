describe("GameFactory", function() {
	
	// initialize the app
	beforeEach(module('myApp'));
	var GameFactory;
	// Inject the modules and get them in global variables
	beforeEach(inject(function($rootScope, $controller, $httpBackend, $injector){
		// The scope for the controller
		scope = $rootScope.$new();
		// Get the service which will be injected
		GameFactory = $injector.get('GameFactory');	
	}));

	it('should get Games', function(){

		var games = GameFactory.getGames();

		// When
		httpBackend.flush(); // Voer synchroon uit ipv asynchroon

		// Then
		expect(games).to.not.have.length(0);
	});
});
