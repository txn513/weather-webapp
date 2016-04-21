angular.module('F1FeederApp.controllers', []).
controller('driversController', ['$scope', 'ergastAPIservice', '$location', function($scope, ergastAPIservice, $location){
	$scope.name = null;
	$scope.cityList = [];
	$scope.latitude = 0;
	$scope.longitude = 0;

	$scope.getWeather = function(name){
		if(!name){
			alert('Please enter a city name');
		}
		else if(/^[\u4e00-\u9fa5]+$/i.test(name)){
			alert("请输入城市拼音");
		}
		else {
			ergastAPIservice.getByName(name).success(function (response) {
				// console.log(response);
	        //Dig into the responde to get the relevant data
	        	$location.path("/"+ response.id);
	    	});
	    	
		}
		
	};
	$scope.getDefaultCity = function(){
		ergastAPIservice.getByName('shenzhen').success(function (response) {
				// console.log(response);
	        //Dig into the responde to get the relevant data
	        	$location.path("/"+ response.id);
	        	console.log(response);
	    	});
	}
	$scope.getCurrentLocation = function() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showLocation);
	    } 
	    else { 
	        alert("Geolocation is not supported by this browser.");
    	}	
	}
	// function showLocation(position){
	// 	$scope.latitude = parseInt(position.coords.latitude);
 //    	$scope.longitude = parseInt(position.coords.longitude);
 //    	alert($scope.latitude);
 //    	ergastAPIservice.getByCoords($scope.latitude, $scope.longitude).success(function (response) {
	//         //Dig into the responde to get the relevant data
	//         	$location.path("/"+ response.id);
	//     	});
	// }

	$scope.getDefaultCity();


}]).
controller('singleController', ['$routeParams', '$scope', 'ergastAPIservice', function($routeParams, $scope, ergastAPIservice){
	$scope.id = $routeParams.id;
	ergastAPIservice.getByID($routeParams.id).success(function (response) {
		$scope.city = response;	
		console.log(response);	
	});
	$scope.date = new Date();
}]);