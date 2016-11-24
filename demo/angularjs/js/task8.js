/**
 * Created by finally on 2016/9/29.
 */
angular.module('myApp', [])
	.controller('Task8', function($scope, $state) {
		$scope.playersText = JSON.parse(localStorage.ids);
		$scope.killedNum = JSON.parse(localStorage.killedNum);
		$scope.killed = JSON.parse(localStorage.killed);
		$scope.stage = JSON.parse(localStorage.stage);
		$scope.gameDays = JSON.parse(localStorage.gameDays);
		$scope.deathList = JSON.parse(localStorage.deathList);
		$scope.winner = '';
		console.log(localStorage);
		console.log($scope.playersText);

		var TextLen = $scope.playersText.length,
			killLen = $scope.killedNum.length;

		for (var i = 0; i < killLen; i++) {
			if ($scope.stage[0] == "stageKill") {
				$scope.deathList.push( {
					list: $scope.killedNum[killLen-1] + '号被杀手杀死了，真实身份是' + $scope.killed[killLen-1]
				});
				$scope.gameGo = "去投票";
				$scope.show = true;
				break;
			}
			else if ($scope.stage[0] == "stageVote") {
				$scope.deathList.push( {
					list: $scope.killedNum[killLen-1] + '号被投票投死了，真实身份是' + $scope.killed[killLen-1]
				});
				$scope.gameGo = "第" + $scope.gameDays[(killLen)/2] + "天";
				$scope.show = false;
				break
			}
		}

		//判断胜负前先计算条件
		for (var x = 0, y = 0, z = 0; x < TextLen; x++) {
			if ($scope.killed[x] == "水民") {             //死亡名单中每有1个水民，则y+1
				y++;
				console.log(y);
			} else if ($scope.killed[x] == "杀手") {           //死亡名单中每有1个杀手，则z+1
				z++;
				console.log(z);
			}
		}

		//判断胜负
		var killerNum = Math.floor(TextLen / 4),               //算出一共有几名杀手
			peopleNum = TextLen - killerNum;                //算出一共有几名水友
		if (killerNum == z) {                  //当原有杀手数 == 死亡名单中的杀手数，则水民胜利
			$scope.gameGo = "水民胜利，查看结果";
			localStorage.setItem('winner', "水民");            //保存胜利者水民winner参数
		} else if (killerNum - z == peopleNum - y) {            //当剩余杀手数 == 剩余水民数，则杀手胜利
			$scope.gameGo = "杀手胜利，查看结果";
			localStorage.setItem('winner', "杀手");            //保存胜利者杀手winner参数
		}

		$scope.decide = function () {
			localStorage.setItem('deathList', JSON.stringify($scope.deathList));
			if (killerNum == z || killerNum - z == peopleNum - y) {
				$state.go('task10');
			}
			else {
				if ($scope.stage[0] == "stageKill") {
					$state.go('task9');
				}
				else if ($scope.stage[0] == "stageVote") {
					$state.go('task7');
				}
			}
		};
	});


