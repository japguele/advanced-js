module.exports =  function($scope , GameFactory,$http ,$q){
    var scope = this;
    this.joinedGame = false;
    
    this.games = {};
    this.init = function() {
        
        this.games = this.getGames();
        
    }

    this.addGame = function(){
        GameFactory.addGame(document.getElementById("layout").selected,{name :document.getElementById("name").value},document.getElementById("minplayers").value,document.getElementById("maxplayers").value);
    
    };
    this.joinGame = function(gameid){
        this.joinedGame = true;
        
        alert(gameid);
        GameFactory.getGame(gameid,function(res){
             GameFactory.addSelfTogame(res.data);
        });
       
        
        
    }
    this.leaveGame = function(index){
        GameFactory.removePlayerFromGame(index,document.getElementById("tempid").value);
        this.joinedGame = false;
    }

    this.getGames = function(){
        
        GameFactory.getGames(function(res){
            scope.games = res;
    
    })};
    this.init();

    
};



