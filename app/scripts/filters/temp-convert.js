angular.module('weatherapp-filter', []).
filter('tempConvert', function(){
	return function(input){
		return parseInt(input-273.15);
	}
})