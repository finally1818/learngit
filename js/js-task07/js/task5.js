/**
 * Created by finally on 2016/9/25.
 */
angular.module('myApp', [])
	.controller('Task5', function($scope, $state) {
		$scope.playersText = JSON.parse(localStorage.ids);
		$scope.killed = [];
		$scope.killedNum = [];
		$scope.deathList = [];
		$scope.stage = [];
		console.log(localStorage);

		//添加数字到数组中
		var textLen = $scope.playersText.length;
		for (var j = 0; j < textLen; j++) {
			$scope.playersText[j].Num = j + 1 + '号';
		}
		localStorage.ids = JSON.stringify($scope.playersText);
		console.log($scope.playersText,$scope.playersText.length);

		$scope.decide = function () {
			localStorage.setItem("killed", JSON.stringify($scope.killed));             //储存杀手杀死的人数组
			localStorage.setItem("killedNum", JSON.stringify($scope.killedNum));       //储存杀手杀死的人编号数组
			localStorage.setItem("deathList", JSON.stringify($scope.deathList));       //储存死亡名单
			localStorage.setItem("stage", JSON.stringify($scope.stage));                    //储存杀人或投票阶段
			$state.go('task6');
		}
	});