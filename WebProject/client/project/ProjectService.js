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
		
	}
});