(function() {
    var app = angular.module("MyApp",[]).controller(
         
    'SignInController',function($scope, AuthService, $location,$window) {
        
        $scope.signin = function(){

		   AuthService.signin(
			   $scope.username, 
			   $scope.password, 
			   function(response){
				  
				   console.log(response.data);	
				   if(response.data.success==true){
				   	  alertify.success("WELCOME!");
				      window.location.href = "index.html";
				   }else{
				   	  alertify.error("ERROR");
				   }

			   }
			   ,function(response){

					console.log(response.data);
					alertify.error("ERROR");									   

			   });
  		};
    });
}());