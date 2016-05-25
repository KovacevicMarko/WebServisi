(function() {
    var app = angular.module("MyApp",[]);
         
    var MainController = function($scope, $http, $location,$window) {
        $http.get("UserService/user/").then(function(response) {
            //$scope.user = response.data;
            $scope.users = response.data;
        })
    }

    app.controller("MainController",MainController);
}());