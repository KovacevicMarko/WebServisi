(function(){
    var app = angular.module("MyApp");
    
    var ReportController = function ($scope,$rootScope, ProjectService,TaskService ,$http,$window) {
        
         var onSuccess1 = function(response){	  
            $scope.projects = response.data;
	     };
		
        var onError1 = function(response){
            console.log(response.data);
            //alertifyy.error("ERROR");
        }
        
         $scope.getProjects = function () {
             ProjectService.getProjects(onSuccess1,onError1);    
         }
         
         $scope.setProject = function () {
             if ($scope.curProject) {
                var totalTasks = $scope.curProject.tasks;
                var usersOnProject = $scope.curProject.usersOnProject;
               
                var userInfo = [];
                /// 1. IZVESTAJ 
                                
                $scope.labels1 = usersOnProject.map(function(u){return u.username;});
                
                var data1 = [];
                for (var i = 0; i < usersOnProject.length; i++) {
                    var tasksForThisUser = [];
                    for (var j = 0; j < totalTasks.length; j++) {
                        if (usersOnProject[i]._id == totalTasks[j].assigned_to) {
                            tasksForThisUser.push(totalTasks[j]);
                        }
                    }
                    userInfo.push({userId : usersOnProject[i]._id, tasks : tasksForThisUser});
                    data1.push(tasksForThisUser.length/totalTasks.length*100);    
                }
                
                $scope.data1 = data1;
                /// KRAJ 1. IZVESTAJA
                
                /// 2 IZVESTAJ
                $scope.labels2 = usersOnProject.map(function(u){return u.username;});
                var data2 = [];
                for (var i = 0; i < userInfo.length; i++) {
                    var completedTasks = 0;
                    for (var j = 0; j < userInfo[i].tasks.length; j++) {
                        if (userInfo[i].tasks[j].status.value == 3) {
                            completedTasks += 1;
                        } // STATUS DONE
                    }
                    var percentage = userInfo[i].tasks.length == 0 ? 0 : completedTasks/userInfo[i].tasks.length*100; 
                    data2.push(percentage);
                }
                 $scope.data2 = [data2];
                 $scope.options2 = { scaleOverride: true, scaleStartValue: 0, scaleSteps: 10, scaleStepWidth: 10 }
                /// KRAJ 2 IZVESTAJA
                
                /// 3. IZVESTAJ
                /// KRAJ 3. IZVESTAJA
                
                /// 4. IZVESTAJ
                /// KRAJ 4. IZVESTAJA
                
                /// 5. IZVESTAJ
                /// KRAJ 5. IZVESTAJA
            }
         }
         
         
         
    }
    
    app.controller("ReportController", ReportController);
}());