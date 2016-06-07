(function() {
    var app = angular.module("MyApp",["ui.router", "ui.multiselect"]);
         
    var MainController = function($scope, $http, AuthService, $location,$state) {
        
		
		
        var onSuccess = function(response){	  
			console.log(response.data);
			if(response.data.success==true){
				//alertifyy.success("WELCOME!");
				$scope.user = response.data.user;
			}else{
				//alertifyy.error("ERROR");
                $state.go('login');
			}

		};
		
		var onError = function(response){
			console.log(response.data);
			//alertifyy.error("ERROR");
		}
        
          AuthService.authenticate(onSuccess,onError);
    }

    app.run(function($rootScope, $http) {
		$http.get('/status').success(function(data) {
			$rootScope.STATUS = data;
		})
		
		$http.get('/priority').success(function(data) {
			$rootScope.PRIORITY = data;
		})
	}).controller("MainController",MainController);
    
    
}());