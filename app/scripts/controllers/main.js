angular.module('F1FeederApp.controllers', []).
controller('driversController', ['$scope', 'ergastAPIservice', '$location', function($scope, ergastAPIservice, $location){
	$scope.name = null;
	$scope.cityList = [];
	

	$scope.getWeather = function(cityName){
		if(!cityName){
			alert('Please enter a city name');
		}
		else if(/^[\u4e00-\u9fa5]+$/i.test(cityName)){
			alert("请输入城市拼音");
		}
		else {
			ergastAPIservice.getDrivers(cityName).success(function (response) {
	        //Dig into the responde to get the relevant data
	        	$scope.city = response;
	    	});
	    	$location.path("/city");
		}
		
	};

}]);