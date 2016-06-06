(function(){
    var app = angular.module("MyApp");
    
    var ProjectController = function ($scope, ProjectService, UserService, $http,$stateParams) {
        
        //Vraca projekat za dati id
        
        var id = $stateParams.projectId;
        
        var onSuccess = function(response){	  
            $scope.project = response.data;
            $scope.team = $scope.project.usersOnProject;
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
            $scope.settings = {displayProp: 'username'};
	    };
		
        var onError2 = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        }
        $scope.getAllUsers = function() {
            UserService.getAllUsers(onSuccess2,onError2);
            
        }
        
        //Setovanje usersa za projekat
        var onSuccess3 = function (response) {
            $scope.team = response.data.usersOnProject;
            //$scope.project.usersOnProject = $scope.team;
            alert("Successfully set team");
        }
        
        var onError3 = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        }
        
        
        $scope.setUsersOnProject = function () {
            var teamIDs = $scope.team.map(function(user) { return user._id;});
            ProjectService.setUsersOnProject(onSuccess3,onError3,id, teamIDs);
                
                        
        }
        
        //Reset usersa za project na stranici
        
        $scope.resetUsersOnProject = function () {
            $scope.team = $scope.project.usersOnProject;
        }
    }
    
    app.controller("ProjectController",ProjectController);
}());