angular.module('MyApp')
.service('ProjectService', function($http){
	return{
		getProjects: function(onSuccess, onError){
		
		var req = {
                method : "GET",
                url: "/ProjectService/projects",
                headers: {
                     'Content-Type': "application/json"
                         }
            }	

		$http(req).then(onSuccess, onError);
		
		},
		
        addProject: function (onSuccess,onError,data) {
            
            var req = {
                method : 'POST',
                url: '/ProjectService/addProject',
                data : data
            }
            
         $http(req).then(onSuccess, onError);
        },
        getProject: function(id,onSuccess, onError){
		
		var req = {
                method : "GET",
                url: "/ProjectService/projects/"+id,
                headers: {
                     'Content-Type': "application/json"
                         }
            }	

		$http(req).then(onSuccess, onError);
		
		}
	}
});