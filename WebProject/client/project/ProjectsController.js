(function(){
    var app = angular.module("MyApp");
    
    var ProjectsController = function ($scope, ProjectService, $http,$window) {
        
        // getProjects method
         var onSuccess1 = function(response){	  
         $scope.projects = response.data;
	      	};
		
	      	var onError1 = function(response){
	     		console.log(response.data);
	    		alertify.error("ERROR");
		      }
          
          $scope.getProjects = function () {
              ProjectService.getProjects(onSuccess1,onError1);    
          }
          
          $scope.getProjects();
          //end with getProjects method
        
        //addProject method
         var onSuccess2 = function(response){
           //$scope.getProjects();
            //alert('Uspesno dodat projekat');
            $window.location.reload();
	      	};
		
	      	var onError2 = function(response){
	     		console.log(response.data);
	    		alertify.error("ERROR");
		      }
          
          $scope.addProject = function () {
              ProjectService.addProject(
                onSuccess2,
                onError2,
                {
                  title : $scope.title,
                  description : $scope.description,
                  deadline : $scope.deadline
                }
                );    
          };
        
        //end with addProject method
    };

    app.controller("ProjectsController", ProjectsController);
    
    }());