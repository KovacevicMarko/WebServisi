(function(){
    var app = angular.module("MyApp");
    
    var TaskController = function ($scope, TaskService,ProjectService,UserService, $http,$stateParams) {
        
       
        var projectId = $stateParams.projectId;
        var taskId = $stateParams.taskId;
        
         //Vraca task za dati id
        
        var onSuccess = function(response){	  
            $scope.task = response.data;
            
            var taskC = {};
            taskC.title = $scope.task.title;
            taskC.desription = $scope.task.desription;
            taskC.status = $scope.task.status;
            taskC.priority = $scope.task.priority;
            taskC.deadline = $scope.task.deadline;
            taskC.assigned_to = $scope.task.assigned_to;
            
            $scope.taskChange = taskC;
            
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
           
           //Ukoliko se nista ne promeni da ne cuva bez veze
           //novu verziju.
              
           var taskCh = $scope.taskChange;
           var changes = false;
           
           for(var prop_i in $scope.taskChange){
               if (!changes) {
                   for(var prop_j in $scope.task){
                        if(prop_i === prop_j){
                            
                            if($scope.taskChange[prop_i] !== $scope.task[prop_j]) {
                                changes = true;   
                            }
                            break;
                        }
                    }
               }
               else break;
           }
           if(!change){
               alert('No changes!');
           }
           else{
               
               TaskService.changeTask(
                    onSuccess2,
                    onError2,
                    taskCh,
                    taskId
                    );
           }
           
        };
        
    }
    
    app.controller("TaskController",TaskController);
}());