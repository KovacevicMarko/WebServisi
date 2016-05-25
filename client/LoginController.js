(function() {
    var app = angular.module("MyApp",[]);
         
    var LoginController = function($scope, $http, $location,$window) {
        $scope.submit = function () {
            //alert($scope.username + "\n" + $scope.password);
            $http.get("UserService/user/"+$scope.username).then(function(response) {
                //$scope.user = response.data;
                if (response.data) {
                    if ($scope.password == response.data.password && $scope.username == response.data.username)
                        $window.location.href = "index.html";
                else
                    alert("Neuspesno logovanje");
                }
                else
                    alert("Neuspesno logovanje");
            });
            
        }
    }

    app.controller("LoginController",LoginController);
}());