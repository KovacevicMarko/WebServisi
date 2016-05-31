angular.module('MyApp')
.service('AuthService', function($http){
	return{
		signin: function(username, password, onSuccess, onError){
		
		var req = {
                method : "POST",
                url: "/AuthService/signIn",
                headers: {
                     'Content-Type': "application/json"
                         },
                data: {"username" : username, "password" : password}
            }	

		$http(req).then(onSuccess, onError);
		
		},
		signup: function(username, role, password, onSuccess, onError){

		var req = {
		    method: 'POST',
		    url: '/AuthService/signUp',
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    data: { 
		    	username: username,
		    	//email: email,
		    	password: password ,
                
                role : role
		    }
		}
		// ODE MI 5 SATI NA OVO
		// UVEK PRAZAN BODY KAD JE SLAO ZAHTEV
		// MORA DA SE STAVI '$.param({foo:bar, ...})' za 'data'
		// http://stackoverflow.com/questions/19254029/angularjs-http-post-does-not-send-data
		
		$http(req).then(onSuccess, onError);

		},
        signout: function(onSuccess, onError){

		var req = {
		    method: 'POST',
		    url: '/AuthService/signOut'
		}	

		$http(req).then(onSuccess, onError);

        },
        authenticate: function(onSuccess, onError){
        
        var req = {
		    method: 'GET',
		    url: '/AuthService/auth'
		}	

		$http(req).then(onSuccess, onError);


        }
	}
});