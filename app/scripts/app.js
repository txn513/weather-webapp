angular.module('F1FeederApp', [
    'F1FeederApp.controllers',
    'F1FeederApp.services',
    'ngRoute'
  ]).
config(['$routeProvider',function($routeProvider) {
  $routeProvider.
    when("/", {templateUrl: "./views/main.html", controller: "driversController"}).
    when("/city", {templateUrl: "./views/city.html", controller: "driversController"}).
    otherwise({redirectTo: "/"});
}])
