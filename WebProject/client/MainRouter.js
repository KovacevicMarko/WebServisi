(function() {
    var app = angular.module("MyApp");
    
    app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider.state('main', 
        {//naziv stanja!
        url: '/main',
        views: {
            header:{
                templateUrl: 'auth/templates/headerL.html',
                controller: 'AuthController'
            },
            content: {
              templateUrl: 'project/projects.html',
              controller: 'ProjectController'
            }
        }
        })
        .state('login',{//naziv stanja!
        url: '/login',
        views: {
            header:{
                templateUrl: 'auth/templates/headerNL.html',
                controller: 'SignInController'
            },
            content: {
              templateUrl: 'auth/templates/signUp.html',
              controller: 'SignUpController'
            }
        }            
        });
    });
}())