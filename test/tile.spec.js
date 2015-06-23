describe('TileFactory', function() {

    var tileFactory;
    
    beforeEach(module('app'));
    beforeEach(inject(function($rootScope, $httpBackend, $controller) {
        tileFactory = $controller;
    }));

    //describe('Constructor', function() {
        it('should have a method that returns the selected tile', function() {
            //var tileFactory = createFactory();
            tileFactory.selectedTile =  {
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

            console.log(tileFactory.getSelectedTile());
            expect(tileFactory.getSelectedTile()).to.equals(tileFactory.selectedTile);
        });

    //});
});
