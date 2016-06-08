(function() {
    var app = angular.module("MyApp");
	
	app.controller(
         
    'AuthController',function($scope, $state, AuthService) {
        
		var onSuccess = function(response){	  
			console.log(response.data);
			if(response.data.success==true){
				
				$scope.user = response.data.user;
				if ($state.current.name == "login") {
					$state.go('main');
				}
			}else{
				
                $state.go('login');
			}

		};
		
		var onError = function(response){
			console.log(response.data);
			
		}
			   
        $scope.authenticate = function(){

		   AuthService.authenticate(
			   onSuccess
			   ,onError);
  		};
         
		 return $scope.authenticate();
    });
}());