/**
 * Created by finally on 2016/9/26.
 */

angular.module('myApp',[])
	.controller('Task2', function($scope,$state){
		localStorage.clear();       //清除本地数据
		console.log(localStorage);
		$scope.decide = function () {
			$state.go('task3')
		};
		$scope.gameClose = function () {
			alert('暂未开放，敬请期待')
		};
	});