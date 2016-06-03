(function(){
    var app = angular.module("MyApp");
    
    var ProjectController = function ($scope, ProjectService, $http,$stateParams) {
        var id = $stateParams.id;
        
        var onSuccess = function(response){	  
            $scope.project = response.data.data;
	    };
		
        var onError = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        }
        
        $scope.getProject = function () {
              ProjectService.getProject(id, onSuccess,onError);    
        }
    }
    
    app.controller("ProjectController",ProjectController);
}());