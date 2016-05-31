(function() {
    var app = angular.module("MyApp",[]).controller(
         
    'SignInController',function($scope, AuthService, $location,$window) {
        
		var onSuccess = function(response){	  
			console.log(response.data);	
			if(response.data.success==true){
				alertify.success("WELCOME!");
				window.location.href = "index.html";
			}else{
				alertify.error("ERROR");
			}

		};
		
		var onError = function(response){
			console.log(response.data);
			alertify.error("ERROR");
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