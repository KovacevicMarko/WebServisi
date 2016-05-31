(function() {
    var app = angular.module("MyApp",["ui.router"]);
         
    var MainController = function($scope, $http, AuthService, $location,$window) {
        $http.get("UserService/user/").then(function(response) {
            //$scope.user = response.data;
            $scope.users = response.data;
        });
        $scope.header = "headerL.html";
        $scope.header = "headerNL.html";
    }

    app.controller("MainController",MainController);
    
    
}());