'use strict';

angular.module ('myApp.register', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])
.controller('RegisterCtrl', ['$scope','$firebaseAuth', '$location', function($scope,$firebaseAuth,$location){

    $scope.signUp = function(){
        var username = $scope.user.email;
        var password = $scope.user.password;

        if (username && password){
            var auth = $firebaseAuth();
            auth.$createUserWithEmailAndPassword(username,password).then(function(){
                console.log("Usuario creado");
               $location.path('/home');
            }).catch(function(error){
                $scope.errMsg = true;
                $scope.errorMessage = error.message;
            });
        }
       
    }

}])