'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
