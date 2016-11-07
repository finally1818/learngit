/**
 * Created by finally on 2016/9/26.
 */

//每次进入游戏清楚之前游戏数据
localStorage.clear();

function gameOn(){
	var game_type_se = document.getElementById('game-type-se');
	game_type_se.onclick = gameType;
}

gameOn();

function gameType(){
	location.href = "js-task02-3.html";
}