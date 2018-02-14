var app=angular.module("app",[]);
app.controller("appController",function($scope,$http,$window){
    $scope.refresh=function()
  {
    $scope.email="";
    $scope.fname="";
    $scope.lname="";
    $scope.score="";
    $scope.pass="";
    $scope.cpass="";
    $scope.message="";
  }
  var refresh=function(){
    $scope.email="";
    $scope.fname="";
    $scope.lname="";
    $scope.score="";
    $scope.pass="";
    $scope.cpass="";
    $scope.message="";

  }
  $scope.refresh2=function()
  {
    $scope.lemail="";
    $scope.lpass="";
  }
    $scope.reg=function(){
        if($scope.pass!=$scope.cpass)
    {
      $scope.message="Passwords don't match";
    }
    else{
      var snd={email:$scope.email,
      fname:$scope.fname,
      lname:$scope.lname,
      score:$scope.score,
      pass:$scope.pass};
      $http.post("/succcessRegister",snd).then(function(res){
         if(res.data=="1")
         {
           $window.location.href="/regSuccess";
         }
         else{
          alert("E-mail already present");
          refresh();
         }
         
    })
    }
}

    $scope.log=function(){
        var snd={email:$scope.lemail,
            pass:$scope.lpass};
            $http.post("/login",snd).then(function(res){
               if(res.data=="1"){
                $window.location.href="/dashboard";
               }
               else{
                 alert("Wrong email or password");
               }
            
          })
    }
});