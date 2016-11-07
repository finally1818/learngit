/**
 * Created by finally on 2016/9/22.
 */
var Num;
var progressNum;
var playerText;
var players;
function btnData(){
	var player = [];
	players = document.getElementById('players');
	playerText = '';
	Num = document.getElementById("num").value;
	//设置输入条件
	if ( isNaN(Num) || Num < 6 || Num >18 ) {
		alert("请输入6~18之间的整数");
	}
	else if ( Num <=18 && Num >=6 ) {
		//根据输入的数字一个数组
		var killerNum = Math.floor(Num/4);
		for ( var i = 0; i < killerNum; i++) {
			player[i] = "杀&emsp;手";
		}
		for ( i = killerNum; i < Num; i++) {
			player[i] = "水&emsp;民";
		}
		console.log(player);
	}

	//数组进行洗牌，并输出一个新数组
	var newPlayer = shuffle(player);
	console.log(newPlayer);

	//输出HTML
	for ( var a = 0; a < newPlayer.length; a++ ){
		if ( a%4 === 0 || a%4 === 1 ){
			playerText += '<li class="gamers-text"><i style="background:#f0ad4e;"></i>' + newPlayer[a] + '&nbsp;1&nbsp;人</li>';
		} else if ( a%4 === 2 || a%4 === 3 ){
			playerText += '<li class="gamers-text"><i style="background:#29bde0;"></i>' + newPlayer[a] + '&nbsp;1&nbsp;人</li>';
		}
	}
	console.log(playerText);
	players.innerHTML = playerText;

	//数组转化成字符串并存储与本地
	var playerStr = JSON.stringify(newPlayer);
	localStorage.ids = playerStr;
	console.log("数组变成字符串存储" + playerStr);
}

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

//创建+1按钮事件
function playSub(){
	Num = document.getElementById("num").value;
	if ( Num > 6 && Num <= 18 ){
		Num--;
	} else {
		Num = 6;
		alert("最少6人");
	}
	document.getElementById("num").value = Num;             //将按钮输出的数值赋予输入框
	document.getElementById('progress').value = Num;            //将按钮输出的数值赋予进度条
}
//创建-1按钮事件
function playAdd(){
	Num = document.getElementById("num").value;
	if ( Num >= 6 && Num < 18 ){
		Num++;
	} else {
		Num = 18;
		alert("最多18人");
	}
	document.getElementById("num").value = Num;             //将按钮输出的数值赋予输入框
	document.getElementById('progress').value = Num;            //将按钮输出的数值赋予进度条
}
//将进度条的数值赋予输入框
function changeNum(){
	progressNum = document.getElementById('progress').value;
	document.getElementById('num').value = progressNum;
}
//将输入框的数值赋予进度条
function gameNum(){
	Num = parseInt(document.getElementById("num").value);
	document.getElementById("progress").value = Num;
}

//创建一个按钮事件
function btnGame(){
	var btn = document.getElementById('button'),
		sub = document.getElementById('sub'),
		add = document.getElementById('add'),
		goDraw = document.getElementById('goDraw');
	progressNum = document.getElementById('progress');
	Num = document.getElementById("num").value;
	sub.onclick = playSub;
	goDraw.onclick = jumpDraw;
	add.onclick = playAdd;
	btn.onclick = btnData;
	progressNum.oninput = changeNum;
	Num.oninput = gameNum;
}

btnGame();


//点击跳转事件触发条件
function jumpDraw(){
	if( players.innerHTML != ''){
		location.href = "js-task03.html";
	} else {
		alert('猪吗？')
	}
}
