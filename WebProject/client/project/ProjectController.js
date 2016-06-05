(function(){
    var app = angular.module("MyApp");
    
    var ProjectController = function ($scope, ProjectService, UserService, $http,$stateParams) {
        var id = $stateParams.id;
        
        var onSuccess = function(response){	  
            $scope.project = response.data;
	    };
		
        var onError = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        }
        
        $scope.getProject = function () {
              ProjectService.getProject(id, onSuccess,onError);
               
        }
        
        // trazi sve korisnike
        
        var onSuccess2 = function(response){	  
            $scope.allUsers = response.data;
            $scope.users = [];
            $scope.settings = {displayProp: 'username'};
	    };
		
        var onError2 = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        }
        $scope.getAllUsers = function() {
            UserService.getAllUsers(onSuccess2,onError2);
        }
    }
    
    app.controller("ProjectController",ProjectController);
}());