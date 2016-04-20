angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};
    
    ergastAPI.getDrivers = function(cityName) {
      return $http({
        method: 'JSONP', 
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&APPID=44ab237bb021408f1cc6e1d192073178&callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;

});