/**
 * Created by finally on 2016/9/25.
 */
var temp = localStorage,
	newPlayer = JSON.parse(temp.ids),
	murderArray = [],
	murderNumArray = [],
	voteArray = [],
	voteNumArray = [],
	deathKillArray = [],
	stage = [];
/*
localStorage.removeItem("murder");
localStorage.removeItem("murderNum");
localStorage.removeItem("vote");
localStorage.removeItem("voteNum");
localStorage.removeItem("deathKill");*/
console.log('读取：' + newPlayer);
console.log('数组长度：' + newPlayer.length);



var game_diary = document.getElementById('game-diary'),
	playersNum = newPlayer.length,
	playNum,
	i = 0,
	game_diary_text = [];

for ( playNum = 1; playNum <= playersNum; playNum++ ) {
	game_diary_text +=
		'<div class="game-diary-gamer">' +
		'<div class="game-diary-identity">' + newPlayer[i] + '</div>' +
		'<div class="game-diary-num">' + (i + 1) + '号' + '</div>' +
		'</div>';
	i++;
}
game_diary.innerHTML = game_diary_text;
console.log(game_diary_text);

function game_btn(){
	temp.setItem("murder",JSON.stringify(murderArray));             //储存杀手杀死的人数组
	temp.setItem("murderNum",JSON.stringify(murderNumArray));       //储存杀手杀死的人编号数组
	temp.setItem("vote",JSON.stringify(voteArray));                 //储存投票投死的人数组
	temp.setItem("voteNum",JSON.stringify(voteNumArray));           //储存投票投死的人编号数组
	temp.setItem("deathKill",JSON.stringify(deathKillArray));       //储存死亡名单
	temp.setItem("stage",JSON.stringify(stage));                    //储存杀人或投票阶段
	location.href = "js-task04-2.html";
}

function btnGame(){
	var game_start = document.getElementById('game-start');
	game_start.onclick = game_btn;
}

btnGame();