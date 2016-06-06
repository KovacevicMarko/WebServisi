(function(){
    var app = angular.module("MyApp");
    
    var TaskController = function ($scope, TaskService,ProjectService,UserService, $http,$stateParams) {
        
       
        var projectId = $stateParams.projectId;
        var taskId = $stateParams.taskId;
        
         //Vraca task za dati id
        
        var onSuccess = function(response){	  
            $scope.task = response.data;
	    };
		
        var onError = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        };
        
        $scope.getTask = function () {
              TaskService.getTask(
                  onSuccess,
                  onError,
                  taskId
                  );
        };
        
        //Dodavanje Taska
        
         var onSuccess1 = function(response) {
            $scope.task = response.data;
        };
        
         var onError1 = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        };
        
        $scope.addTask = function () {
              TaskService.addTask(
              onSuccess1,
              onError1,
              $scope.newTask,
              projectId
              );
               
        };
        
        // Izmena Taska
        
        var onSuccess2 = function(response) {
            $scope.task = response.data;
        };
         var onError2 = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        };
        
        $scope.changeTask = function () {
              TaskService.changeTask(
              onSuccess2,
              onError2,
              $scope.taskChange
              );
               
        };
        
    }
    
    app.controller("TaskController",TaskController);
}());