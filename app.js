// 在app.js中
function MyController($scope) {
 $scope.clock = {
 now: new Date()
 };
 $scope.hello={
 	text:"dxx"
 };
 var updateClock = function() {
 $scope.clock.now = new Date()
 };
 setInterval(function() {
 $scope.$apply(updateClock);
 }, 1000);
 updateClock();
};


function CommonController($scope) {
 
 $scope.commonFun=function(){
 	alert("通用功能");
 };
 $scope.myname={
	dxx:"你知道我是谁啊"
 }
  
}

function Test1Controller($scope) {
 
 $scope.hello={
 	text:"dxx1"
 };
 $scope.test1=function(){
 	alert("test1");
 };
  
}


function Test2Controller($scope) {
 $scope.hello={
 	text:"dxx2"
 };
 $scope.test2=function(){
 	alert("test2");
 };
  
}
