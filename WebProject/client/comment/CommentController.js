(function(){
    var app = angular.module("MyApp");
    
    var CommentController = function ($scope,CommentService,TaskService,ProjectService,UserService, $http,$stateParams) {
        
       
        ///var projectId = $stateParams.projectId;
        var taskId = $stateParams.taskId;
        
         //Vraca komentare za dati taskId
        
        var onSuccess = function(response){	  
          //  $scope.comments = response.data;
	    };
		
        var onError = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        };
        
        $scope.getComments = function () {
              CommentService.getComments(
                  onSuccess,
                  onError,
                  taskId
                  );
        };
        
        //Dodavanje komentara
        
         var onSuccess1 = function(response) {
            //$scope.task = response.data;
        };
        
         var onError1 = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        };
        
        $scope.addComment = function () {
              CommentService.addComment(
              onSuccess1,
              onError1,
              $scope.newComment,
              taskId
              );
               
        };
        
        // Izmena komentara
        
        var onSuccess2 = function(response) {
            //$scope.task = response.data;
        };
         var onError2 = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        };
        
        $scope.changeComment = function () {
               
               TaskService.changeTask(
                    onSuccess2,
                    onError2,
                    commentChange,
               )
           
        };
        
         // Brisanje komentara
        
        var onSuccess3 = function(response) {
            //$scope.task = response.data;
        };
         var onError3 = function(response){
            console.log(response.data);
            alertify.error("ERROR");
        };
        
        $scope.deleteComment = function () {
               
               var data = {'taskID' : taskId}; 
                       
               CommentService.changeTask(
                    onSuccess3,
                    onError3,
                    data,
                    commentId
               )
           
        };
        
        
    }
    
    app.controller("CommentController",CommentController);
}());