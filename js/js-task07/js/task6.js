/**
 * Created by finally on 2016/9/26.
 */
angular.module('myApp', [])
	.controller('Task6', function($scope, $state) {
		$scope.gameDays = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
		$scope.playersText = JSON.parse(localStorage.ids);
		$scope.killedNum = JSON.parse(localStorage.killedNum);
		$scope.stage = JSON.parse(localStorage.stage);
		localStorage.setItem("gameDays", JSON.stringify($scope.gameDays));
		console.log($scope.playersText);
		console.log(localStorage);


		for (var i = 0; i < $scope.gameDays.length; i++) {
			$scope.gameDay = '第' + $scope.gameDays[($scope.killedNum.length) / 2] + '天';
		}

		$scope.gameClose = function () {
			alert('暂未开放');
		};

		$scope.decide = function () {

			$state.go('task7');
		};

	});
