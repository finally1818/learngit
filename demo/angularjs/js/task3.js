/**
 * Created by finally on 2016/9/22.
 */
angular.module('myApp', [])
	.controller('Task3', function($scope, $state) {
		console.log(localStorage);
		$scope.Num = 12;
		$scope.player = [];
		$scope.Set = function (){
			//设置输入条件
			if ( isNaN($scope.Num) || $scope.Num < 6 || $scope.Num >18 ) {
				alert("请输入6~18之间的整数");
				return;
			}
			//循环输出
			$scope.playersText = [];
			for(var i = 0; i < $scope.Num; i++ ) {
				$scope.playersText.push( {
					job:'水民',
					status:'alive'
				})
			}
			switch (parseInt($scope.Num)) {
				case 6:
				case 7:
				case 8:
					$scope.playersText.splice(
						0,1,
						{job: '杀手', status:'alive'}
					);
					break;
				case 9:
				case 10:
				case 11:
					$scope.playersText.splice(
						0,2,
						{job: '杀手', status:'alive'},
						{job: '杀手', status:'alive'}
					);
					break;
				case 12:
				case 13:
				case 14:
				case 15:
					$scope.playersText.splice(
						0,3,
						{job: '杀手', status:'alive'},
						{job: '杀手', status:'alive'},
						{job: '杀手', status:'alive'}
					);
					break;
				case 16:
				case 17:
				case 18:
					$scope.playersText.splice(
						0,4,
						{job: '杀手', status:'alive'},
						{job: '杀手', status:'alive'},
						{job: '杀手', status:'alive'},
						{job: '杀手', status:'alive'}
					);
					break;
			}
			//数组进行洗牌，并输出一个新数组
			$scope.playersText = shuffle($scope.playersText);

			//将偶行数的方块颜色变为蓝色
			for (var j = 0; j < $scope.Num; j++) {
				if (j%4 == 0 || j%4 == 1) {
					$scope.playersText[j].isColor = true;
				} else if (j%4 == 2 || j%4 == 3){
					$scope.playersText[j].isColor = false;
				}
				console.log($scope.playersText[j]);
			}
			//数组转化成字符串并存储与本地
			localStorage.ids = JSON.stringify($scope.playersText);
		};

		//创建一个函数，洗牌法（随机排序）
		function shuffle(array) {
			var myArray = array.concat();
			for (var x = myArray.length; x--; ) {
				var y = Math.floor(Math.random() * (x + 1));
				var temp = myArray[x];
				myArray[x] = myArray[y];
				myArray[y] = temp;
			}
			return myArray;
		}

		//创建-1按钮事件
		$scope.playSub = function (){
			if ( $scope.Num > 6 && $scope.Num <= 18 ){
				$scope.Num--;
			} else {
				$scope.Num = 6;
				alert("最少6人");
			}
			$scope.progress = $scope.Num;           //将按钮输出的数值赋予进度条
			console.log($scope.Num,$scope.progress);
		};

		//创建+1按钮事件
		$scope.playAdd = function (){
			if ( $scope.Num >= 6 && $scope.Num < 18 ){
				$scope.Num++;
			} else {
				$scope.Num = 18;
				alert("最多18人");
			}
			$scope.progress = $scope.Num;            //将按钮输出的数值赋予进度条
			console.log($scope.Num,$scope.progress);
		};

		//点击跳转事件触发条件
		$scope.decide = function() {
			if( $scope.playersText == undefined ){
				alert('请先分配玩家身份！')
			} else {
				$state.go('task4')
			}
		};
	});
