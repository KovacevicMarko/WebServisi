(function() {
    var app = angular.module("MyApp",["ui.router", "ui.multiselect"]);
         
    var MainController = function($scope, $http, AuthService, $location,$state) {
        
        var onSuccess = function(response){	  
			console.log(response.data);
			if(response.data.success==true){
				alertify.success("WELCOME!");
				$scope.user = response.data.user;
			}else{
				alertify.error("ERROR");
                $state.go('login');
			}

		};
		
		var onError = function(response){
			console.log(response.data);
			alertify.error("ERROR");
		}
        
          AuthService.authenticate(onSuccess,onError);
    }

    app.controller("MainController",MainController);
    
    
}());