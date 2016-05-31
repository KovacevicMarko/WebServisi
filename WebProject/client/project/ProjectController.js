(function(){
    var app = angular.module("MyApp");
    
    var ProjectController = function ($scope, ProjectService, $http) {
        
        var onSuccess = function(response){	  
			$scope.projects = response.data;
		};
		
		var onError = function(response){
			console.log(response.data);
			alertify.error("ERROR");
		}
        
        
       ProjectService.getProjects(onSuccess,onError);
    }
  
    app.controller("ProjectController", ProjectController);
    
    /*app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider.state('main', 
    {//naziv stanja!
      url: '/main',
      views: {
          getProjects:{
              templateUrl: 'project/projects.html',
              controller: 'ProjectController'
        },
        
      }
    });
  });*/
}());