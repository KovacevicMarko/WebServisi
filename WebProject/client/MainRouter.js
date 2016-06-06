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
              controller: 'ProjectsController'
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
        })
        .state('project',{//naziv stanja!
        url: '/projects/:id',
        views: {
            header:{
                templateUrl: 'auth/templates/headerL.html',
                controller: 'AuthController'
            },
            content: {
              templateUrl: 'project/templates/project.html',
              controller: 'ProjectController'
            }
        }            
        })
        .state('task', {
            url: '/tasks/:id',
            views: {
                header:{
                    templateUrl: 'auth/templates/headerL.html',
                    controller: 'AuthController'
                },
                content: {
                    templateUrl: 'task/templates/task.html',
                    controller: 'TaskController'
                }
            }  
        }
            
        );
    });
}())