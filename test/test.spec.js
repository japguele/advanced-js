describe("GamesFactory", function() {
	
	// initialize the app
	beforeEach(module('myApp'));
	var GamesFactory;
	// Inject the modules and get them in global variables
	beforeEach(inject(function($rootScope, $controller, $httpBackend, $injector){
		// The scope for the controller
		scope = $rootScope.$new();
		// Get the service which will be injected
		GamesFactory = $injector.get('GamesFactory');
		// For mocking the backend
		
		// Stubbing with sinon
	
	}));

	it('should create Game', function(){
		// Given

		var person = {name : "jaapie"}
		var layout = "snake"
		var createdBy = "jaapie"
		var minPlayers = "1"
		var maxPlayers = "5"
		
		// Nu expecten we het omdat we in de test zitten.
		// Bij de before of beforeEach kunnen we ook whenPost stubben
		GamesFactory.addGame(layout, createdBy,minPlayers,maxPlayers)

		// When
		
		httpBackend.flush(); // Voer synchroon uit ipv asynchroon

		// Then
		expect(scope.error).to.equal(expectedError);
		expect(GamesFactory.Games).to.not.have.length(0);
	});
});
