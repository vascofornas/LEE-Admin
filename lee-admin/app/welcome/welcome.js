'use strict';

angular.module ('myApp.welcome', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
}])

.controller('WelcomeCtrl', ['$scope', 'CommonProp', '$firebaseArray','$firebaseObject', '$location', function($scope,CommonProp, $firebaseArray, $firebaseObject,$location){
    $scope.username = CommonProp.getUser();
    if (!$scope.username){
        $location.path('/home');
    }

    var ref = firebase.database().ref().child('Enclaves');
    $scope.articles = $firebaseArray(ref);
 

    $scope.editPost = function(id){
        var ref = firebase.database().ref().child('Enclaves/' + id);
        $scope.editPostData = $firebaseObject(ref);
        console.log($scope.editPostData);
    };
    $scope.updatePost = function(id){
        var ref = firebase.database().ref().child('Enclaves/' + id);
        ref.update({
            Nombre_enclave: $scope.editPostData.Nombre_enclave,
            Descripcion_enclave: $scope.editPostData.Descripcion_enclave
        }).then(function(ref){
            $("#editModal").modal('hide');
        }, function(error){
            console.log(error);
        });
    };
    $scope.deleteCnf = function(article){
        $scope.deleteArticle = article;
    };
    $scope.deletePost = function(deleteArticle){
        $scope.articles.$remove(deleteArticle);
        $("#deleteModal").modal("hide");
    };
    $scope.logout = function(){
        CommonProp.logoutUser();
    }
}])
