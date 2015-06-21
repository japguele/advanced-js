module.exports = function ($scope,gameId) {
  var socket = io("http://mahjongmayhem.herokuapp.com?gameId="+gameId)
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $scope.$apply(function () {
          callback.apply(socket, args)
        })
      })
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $scope.$apply(function () {
          if (callback) {
            callback.apply(socket, args)
          }
        })
      })
    }
  }
}