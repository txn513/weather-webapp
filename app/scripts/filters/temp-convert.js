angular.module('weatherapp-filter', []).
filter('tempConvert', function(){
	return function(input){
		return Math.round(input-273.15);
	}
})