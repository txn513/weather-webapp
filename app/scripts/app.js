angular.module('F1FeederApp', [
    'F1FeederApp.controllers',
    'F1FeederApp.services',
    'ngRoute',
    'weatherapp-filter',
    'weatherapp-filter-direction'
  ]).
config(['$routeProvider',function($routeProvider) {
  $routeProvider.
    when("/:id", {templateUrl: "./views/city.html", controller: "singleController"}).
    otherwise({redirectTo: "/"});
}])
