(function() {
    var app = angular.module("MyApp");
	
	app.controller(
         
    'AuthController',function($scope, $state, AuthService) {
        
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
			   
        $scope.authenticate = function(){

		   AuthService.authenticate(
			   onSuccess
			   ,onError);
  		};
          $scope.authenticate();
    });
}());