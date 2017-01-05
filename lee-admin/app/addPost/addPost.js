'use strict';

angular.module ('myApp.addPost', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/addPost', {
        templateUrl: 'addPost/addPost.html',
        controller: 'AddPostCtrl'
    });
}])

.controller('AddPostCtrl', ['$scope', '$firebaseArray','$location','CommonProp',function($scope, $firebaseArray,$location,CommonProp){
    $scope.username = CommonProp.getUser();
    if (!$scope.username){
        $location.path('/home');
    }


    var ref = firebase.database().ref().child('Enclaves');
    $scope.articles = $firebaseArray(ref);

    $scope.createPost = function(){
        var nombre = $scope.article.nombre_enclave;
        var descripcion = $scope.article.descripcion_enclave;
        $scope.articles.$add({
            
            Nombre_enclave: nombre,
            Descripcion_enclave: descripcion
        }).then(function(ref){
            console.log(ref);
            $scope.success=true;
            window.setTimeout(function(){
                $scope.$apply(function(){
                    $scope.success =false;
                });
               
            }, 2000);
        }, function(error){
            console.log(error);
        });
    };

}]);