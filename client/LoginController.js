(function() {
    var app = angular.module("MyApp",[]);
         
    var LoginController = function($scope, $http, $location,$window) {
        $scope.submit = function () {
            //alert($scope.username + "\n" + $scope.password);
            
            var req = {
                method : "POST",
                url: "/UserService/user/signIn",
                headers: {
                'Content-Type': "application/json"
                },
                data: {"username" : $scope.username, "password" : $scope.password}
            }
            
            $http(req).then(function(response) {
                //$scope.user = response.data;
                if (response.data.username) {
                        $window.location.href = "index.html";
                }
                else
                    alert(response.data);
            });
            
        }
    }

    app.controller("LoginController",LoginController);
}());