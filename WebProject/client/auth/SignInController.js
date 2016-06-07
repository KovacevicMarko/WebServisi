(function() {
    var app = angular.module("MyApp");
	
	app.controller(
         
    'SignInController',function($scope, $state, AuthService) {
        
		var onSuccess = function(response){	  
			console.log(response.data);
			if(response.data.success==true){
				
				$state.go('main');
			}else{
				//alertify.error("ERROR");
			}

		};
		
		var onError = function(response){
			console.log(response.data);
			//alertify.error("ERROR");
		}
			   
        $scope.signin = function(){

		   AuthService.signin(
			   $scope.username, 
			   $scope.password, 
			   onSuccess
			   ,onError);
  		};
    });
}());