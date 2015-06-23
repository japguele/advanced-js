describe("MatchedTile Directive Tests", function() {
    var $compile;
    var $scope;
    var $httpBackend;
    var elm;

    //angular.mock.module('templates');

    // Load the templates module
    beforeEach(module('app'));
    beforeEach(module('templates/matchedTile.html'));

    // Angular strips the underscores when injecting
    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $compile = _$compile_;
        $scope = _$rootScope_.$new();

        $httpBackend.expectGET("./templates/matchedTile.html").respond(200, "");

        elm = angular.element('<matchedtile></matchedtile>');
        $scope.tile = {
            xPos: 7,
            yPos: 1,
            zPos: 0,
            tile: {
                _id: 76,
                suit: "Character",
                name: "2",
                matchesWholeSuit: false,
                __v: 0
            },
            _id: "5541fc5b1872631100678bb5"
        };

        $compile(elm)($scope);
        $scope.$digest();
    }));

    it("should render the suit and name as passed in by $scope",
        inject(function() {
            // Render the template as a string
            var templateAsHtml = elm.html();

            // Verify that the $scope variables are in the template
            //expect(true).to.equal(true);
            expect(templateAsHtml).to.contain($scope.tile.tile.suit);
            expect(templateAsHtml).to.contain($scope.tile.tile.name);
        })
    );
});
