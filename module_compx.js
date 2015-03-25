var UserModule = angular.module('UserModule',[]);
UserModule.controller('UserCtrl',['$scope',function($scope){
 	 $scope.user={
 		email:"dxx1@qq.com",
 		psd:'123',
 		auto:true
     };

     $scope.getData=function(){
     	console.log($scope.user);
     }


     $scope.setData=function(email,pwd,auto){
     	
     	 $scope.user={
 		email:email,
 		psd:pwd,
 		auto:auto
     };
     }

 }]);
 
 
 