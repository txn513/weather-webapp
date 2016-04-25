angular.module('F1FeederApp.controllers', []).
controller('driversController', ['$scope', 'ergastAPIservice', '$location', function($scope, ergastAPIservice, $location){
	$scope.name = null;
	$scope.cityList = [];
	$scope.latitude = 0;
	$scope.longitude = 0;
	var onOff = true;

	$scope.getWeather = function(name){
		if (!onOff) {
			return false;
		}
		onOff = false;
		if(!name){
			alert('Please enter a city name');
		}
		else if(/^[\u4e00-\u9fa5]+$/gi.test(name)){
			alert("请输入城市拼音");
			return false;
		}
		else {
			ergastAPIservice.getByName(name).success(function (response) {
				// console.log(response);
	        //Dig into the responde to get the relevant data
	        	$location.path("/"+ response.id);
	    	});
	    	onOff = true;
		}
		
	};
	var getCity = function(name){
		ergastAPIservice.getByName(name).success(function (response) {
				// console.log(response);
	        //Dig into the responde to get the relevant data
	        	$location.path("/"+ response.id);
	        	// console.log(response);
	    	});
	}
	// var getCurrentLocation = function() {
	//     if (navigator.geolocation){
	//         navigator.geolocation.getCurrentPosition(showLocation);
	//     } 
	//     else { 
	//         alert("Geolocation is not supported by this browser.");
	//         getDefaultCity();
 //    	}	
	// }
	// function showLocation(position){
	// 	var latitude = position.coords.latitude;
 //    	var longitude = position.coords.longitude;
    
 //    	ergastAPIservice.getByCoords(latitude,longitude).success(function (response) {
	//         //Dig into the responde to get the relevant data
	//         	$location.path("/"+ response.id);
	//         	$scope.localCity = response;
	//         	// console.log(response);
	//     	});
	// }
	ergastAPIservice.getIP().success(function (response) {
	        //Dig into the responde to get the relevant data
	        $scope.ip = response;
	        console.log(response);
	        getCity($scope.ip.city);
	});
	// getCity('shenzhen');
	// getCurrentLocation();
	


}]).
controller('singleController', ['$routeParams', '$scope', 'ergastAPIservice', function($routeParams, $scope, ergastAPIservice){
	$scope.id = $routeParams.id;
	$scope.date = new Date();
	ergastAPIservice.getByID($routeParams.id).success(function (response) {
		$scope.city = response;	
	});
	
	ergastAPIservice.getFiveById($routeParams.id).success(function (response) {
		$scope.nextDays = response;
		// console.log(response);	
	});
	// ergastAPIservice.getByZip(94132,'us').success(function (response) {
	// 	console.log(response);	
	// });

}]);