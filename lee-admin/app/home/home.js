'use strict';

angular.module ('myApp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope','$firebaseAuth', '$location','CommonProp', function($scope,$firebaseAuth,$location,CommonProp){

    $scope.username = CommonProp.getUser();

    $scope.signIn = function(){
        var username = $scope.user.email;
        var password = $scope.user.password;
        var auth = $firebaseAuth();

        auth.$signInWithEmailAndPassword(username,password).then(function(){
            $scope.errMsg = false;
            CommonProp.setUser($scope.user.email);
            $location.path('/welcome');
        }).catch(function(error){
            $scope.errMsg = true;
            $scope.errorMessage = error.message;
        });
    }

}])

.service('CommonProp', ['$location', '$firebaseAuth', function($location,$firebaseAuth){

    var user = "";
    var auth = $firebaseAuth();

    return {
        getUser:function(){
            if (user ==""){
               user = localStorage.getItem("userEmail");
            }
            return user;
        },
        setUser: function(value){
            localStorage.setItem("userEmail", value);
            user = value;

        } ,
        logoutUser: function(){
            auth.$signOut();
                console.log("Deslogeado");
                user = "";
                localStorage.removeItem('userEmail');
                $location.path('/home');
            
        }  
     };
}]);