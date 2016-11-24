/**
 * Created by finally on 2016/10/1.
 */
angular.module('myApp', [])
	.controller('Task10', function($scope, $state) {
		$scope.playersText = JSON.parse(localStorage.ids);
		$scope.killedNum = JSON.parse(localStorage.killedNum);
		$scope.killed = JSON.parse(localStorage.killed);
		$scope.stage = JSON.parse(localStorage.stage);
		$scope.gameDays = JSON.parse(localStorage.gameDays);
		$scope.winner = localStorage.winner;
		$scope.gameInfo = [];
		console.log(localStorage);
		console.log($scope.playersText);

		var TextLen = $scope.playersText.length,
			killLen = $scope.killedNum.length;
		$scope.killerNum = Math.floor(TextLen / 4);           //杀手数量
		$scope.peopleNum = TextLen - $scope.killerNum;                 //水民数量

		if ($scope.winner == '水民') {
			$scope.playerPro = (($scope.peopleNum/TextLen) * 100).toFixed(2);
		} else if ($scope.winner == '杀手') {
			$scope.playerPro = (($scope.killerNum/TextLen) * 100).toFixed(2);
		}

		for (var i = 0, j = 0; i < killLen/2; i++) {
			$scope.gameInfo.push( {
				day: $scope.gameDays[i],
				num1: $scope.killedNum[j],
				job1: $scope.killed[j],
				num2: $scope.killedNum[j + 1],
				job2: $scope.killed[j + 1]
			});
			j = j + 2
		}

		$scope.decide = function () {
			$state.go('task2');
		};

		$scope.share = function () {
			alert('暂未开放');
		};
	});