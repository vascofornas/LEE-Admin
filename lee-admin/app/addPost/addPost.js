'use strict';

angular.module ('myApp.addPost', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/addPost', {
        templateUrl: 'addPost/addPost.html',
        controller: 'AddPostCtrl'
    });
}])

.controller('AddPostCtrl', ['$scope', function($scope){

}]);