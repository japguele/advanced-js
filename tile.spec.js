describe('TileFactory tests', function (){
  var tileFactory;
  
  // excuted before each "it" is run.
  beforeEach(function (){
    
    // load the module.
    module('app');
    
    inject(function(_tileFactory_) {
      tileFactory = _tileFactory_;
    });
  });
     
  // check to see if it has the expected function
  it('should have an returnTiles function', function () { 
    expect(angular.isFunction(tileFactory.returnTiles)).toBe(true);
  });

  it('should get Games', function(){
	var tiles = tileFactory.getTiles();
	httpBackend.flush();
	expect(tiles).to.not.have.length(0);
  });
});