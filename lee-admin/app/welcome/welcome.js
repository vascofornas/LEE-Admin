'use strict';

angular.module ('myApp.welcome', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
}])

.controller('WelcomeCtrl', ['$scope',, function($scope){
    
}])
