var studentModule = angular.module("studentModule",[]);

studentModule.controller("addStudentController", function($scope, studentFactory, studentService){
    $scope.master = {};
    
    $scope.update = function(student) {
        $scope.master = angular.copy(student);
        studentFactory.update($scope.master);
    };
    
    $scope.reset = function(form) {
        
        $scope.student = angular.copy($scope.master);
    }
    
    $scope.reset();
});

studentModule.controller("viewStudentController", function($scope, studentFactory, studentService){
    $scope.students = studentFactory.list();
});

studentModule.factory("studentFactory", function(){
    

        var studentList = [];
    
        var thisService = {};
        
        thisService.update = function(student){

            studentList.push(student);
        } 
        
        thisService.list = function(){
            return studentList;
        }
        
        return thisService;

});

studentModule.service("studentService", function(){    

        var studentList = [];
        
        this.update = function(student){

            studentList.push(student);
        } 
        
        this.list = function(){
            return studentList;
        }

});