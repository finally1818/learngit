/**
 * Created by finally on 2016/9/24.
 */
angular.module('myApp', [])
	.controller('Task4', function($scope, $state) {
		//导出本地内容
		$scope.playerStr = localStorage.ids;
		$scope.palyersText = JSON.parse($scope.playerStr);
		console.log($scope.palyersText);
		console.log(localStorage);

		var textLength = $scope.palyersText.length,              //textLength赋值输出数组长度
			i = 0;                                      //i赋值0
		$scope.drawNum = 1;
		$scope.gameNum = 1;
		$scope.gameImg = 'images/draw.png';
		$scope.gameImgStyle = 'task4-length';
		$scope.gameDeal = '查看' + (i + 1) + '号身份';
		$scope.gameNum = i + 1;
		//输入内容
		$scope.decide = function () {
			//如果翻牌数>=数组长度的2倍时（如x>=12）
			if ($scope.drawNum >= textLength * 2) {
				$state.go('task5');
			}
			//如果翻牌数<数组长度的2倍-1（如x<11）且翻牌数/2的余数=1时，为何不是<12？因为这个页面是查看look页，即为偶数页。
			else if ($scope.drawNum < textLength * 2 - 1 && $scope.drawNum % 2 == 1) {
				$scope.gameImg = 'images/wow.png';
				$scope.gameImgStyle = 'task4-short';
				$scope.gameRole = '角色：' + $scope.palyersText[i].job;
				$scope.gameWord = '词组：西伯利亚';
				$scope.gameInfo = '想办法猜到别人的词，同时还要注意不要暴露自己哦！';
				$scope.gameDeal = '隐藏并传递给' + (i + 2) + '号';
				$scope.gameNum = i + 1;
				$scope.show = true;
				i++;
			}
			//如果翻牌数=数组长度的2倍-1（如x=11），则执行下列｛｝中的代码
			else if ($scope.drawNum >= textLength * 2 - 1) {
				$scope.gameImg = 'images/wow.png';
				$scope.gameStyle = 'task4-short';
				$scope.gameRole = '角色：' + $scope.palyersText[i].job;
				$scope.gameWord = '词组：西伯利亚';
				$scope.gameInfo = '想办法猜到别人的词，同时还要注意不要暴露自己哦！';
				$scope.gameDeal = '查看法官台本';
				$scope.gameNum = i + 1;
				$scope.show = true;
			}
			//排除其他可能剩下的其实都是偶数页执行下列｛｝中的代码
			else {
				$scope.gameImg = 'images/draw.png';
				$scope.gameStyle = 'task4-length';
				$scope.gameRole = '';
				$scope.gameWord = '';
				$scope.gameInfo = '';
				$scope.gameDeal = '查看' + (i + 1) + '号身份';
				$scope.gameNum = i + 1;
				$scope.show = false;
			}
			$scope.drawNum++;
		};
	});