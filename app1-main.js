var app1 = angular.module("app1", ["ngRoute", "studentModule"]);

app1.config(function($routeProvider){
   $routeProvider
       .when("/add", {templateUrl: "app1-add-student.htm"})
       .when("/view", {templateUrl: "app1-view-student.htm"});
});