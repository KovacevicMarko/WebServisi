angular.module('MyApp')
.service('TaskService', function($http){
	return{
		
        getTask: function(onSuccess, onError,taskId){
		
		var req = {
                method : "GET",
                url: "/TaskService/tasks/"+taskId,
                headers: {
                     'Content-Type': "application/json"
                         }
            }	

		$http(req).then(onSuccess, onError);
	},
    
    addTask : function(onSuccess,onError,data,projectId) {
        
        var req = {
            method : "POST",
            url: "/TaskService/task/"+projectId,
            headers: {
                     'Content-Type': "application/json"
                     },
            data : data
        }
        
        $http(req).then(onSuccess, onError);
    },
    
    changeTask : function(onSuccess,onError,data) {
        
        var req = {
            method : "POST",
            url: "/TaskService/changeTask",
            headers: {
                     'Content-Type': "application/json"
                     },
            data : data
        }
        
        $http(req).then(onSuccess, onError);
    }
    
  }
});