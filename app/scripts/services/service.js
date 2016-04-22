angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};
    
    ergastAPI.getByName = function(cityName) {
      return $http({
        method: 'JSONP', 
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&APPID=44ab237bb021408f1cc6e1d192073178&callback=JSON_CALLBACK'
      });
    }
    ergastAPI.getByID = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://api.openweathermap.org/data/2.5/weather?id='+ id +'&APPID=44ab237bb021408f1cc6e1d192073178&callback=JSON_CALLBACK'
      });
    }
    ergastAPI.getByCoords = function(lat,lon) {
      return $http({
        method: 'JSONP', 
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&APPID=44ab237bb021408f1cc6e1d192073178&callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getFiveById = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?id='+ id +'&units=metric&cnt=5&APPID=44ab237bb021408f1cc6e1d192073178&callback=JSON_CALLBACK'
      });
    }
    return ergastAPI;

});