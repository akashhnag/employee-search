var listapp=angular.module("listapp",[]);
listapp.controller("listcontroller",function($scope,$http){
    
    $http.get("/dashboard/items").then(function(res){
        $scope.employees=res.data;
        
    })
});

