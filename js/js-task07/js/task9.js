/**
 * Created by finally on 2016/10/1.
 */
angular.module('myApp', [])
	.controller('Task9', function($scope, $state) {
		$scope.playersText = JSON.parse(localStorage.ids);
		$scope.killedNum = JSON.parse(localStorage.killedNum);
		$scope.killed = JSON.parse(localStorage.killed);
		$scope.stage = JSON.parse(localStorage.stage);
		console.log($scope.playersText);
		console.log(localStorage);

		var TextLen = $scope.playersText.length,
			killed,
			killedNum;

		for (var j = 0; j < TextLen; j++) {
			if ($scope.playersText[j].status == 'dead') {
				$scope.playersText[j].killClick = '';
				$scope.playersText[j].opacity = 'dead-opacity';
			}
		}

		$scope.gameKill = function ($index) {
			for (var i = 0; i < TextLen; i++) {
				$scope.playersText[i].killClick = '';
				if ($scope.playersText[$index].status == 'dead') {
					alert('该名玩家已死');
					break;
				}
				else {
					$scope.playersText[$index].killClick = 'kill-click';
					killed = $scope.playersText[$index].job;         //killed赋值被选择杀死的人
					killedNum = $index + 1;             //killedNum赋值被杀死的人的编号
				}
			}
			console.log(killed);
		};

		$scope.decide = function () {
			if (killed == undefined) {
				alert('请选择一名玩家')
			}
			else {
				$scope.playersText[killedNum - 1].status = 'dead';      //为死亡的玩家添加死亡状态
				localStorage.ids = JSON.stringify($scope.playersText);
				$scope.killed.push(killed);                          //数组内添加killed
				localStorage.killed = JSON.stringify($scope.killed);         //存储数组killedArray
				$scope.killedNum.push(killedNum);                    //数组内添加killedNum
				localStorage.killedNum = JSON.stringify($scope.killedNum);        //存储数组killedNumArray
				$scope.stage.pop();
				$scope.stage.push("stageVote");
				localStorage.stage = JSON.stringify($scope.stage);
				$state.go('task8');
			}
		};
	});