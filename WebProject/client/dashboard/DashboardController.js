(function(){
    var app = angular.module("MyApp");
    
    var DashboardController = function ($scope,$rootScope, ProjectService,TaskService ,$http,$window) {
        
        // getTasks method
         var onSuccess1 = function(response){	  
         $scope.tasks = response.data;
	      	};
		
	      	var onError1 = function(response){
	     		console.log(response.data);
	    		//alertifyy.error("ERROR");
		      }
          
          $scope.getTasks = function () {
              TaskService.getTasks(onSuccess1,onError1);    
          }
          
          //$scope.getProjects();
          //end with getProjects method
        
        //addProject method
         var onSuccess2 = function(response){
           //$scope.getProjects();
            //alert('Uspesno dodat projekat');
            $window.location.reload();
	      	};
		
	      	var onError2 = function(response){
	     		console.log(response.data);
	    		//alertifyy.error("ERROR");
		      }
          
          $scope.addProject = function () {
              ProjectService.addProject(
                onSuccess2,
                onError2,
                {
                  title : $scope.title,
                  code : $scope.code,
                  description : $scope.description,
                  deadline : $scope.deadline
                }
                );    
          };
        
        
        //end with addProject method
        
        $scope.clearInputs = function () {
            delete $scope.code;
            delete $scope.title;
            delete $scope.description;
            delete $scope.deadline;    
        }
    };

    app.controller("DashboardController", DashboardController);
    
    }());