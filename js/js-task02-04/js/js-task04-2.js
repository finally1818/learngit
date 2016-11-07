/**
 * Created by finally on 2016/9/26.
 */
var gameDaysNum = ["一","二","三","四","五","六","七","八","九","十"],
	game_day = document.getElementById('game-day'),
	j = 0,
	temp = localStorage,
	newPlayer = JSON.parse(temp.ids),
	murderNumArray = JSON.parse(temp.murderNum),
	stage = JSON.parse(temp.stage),
	killer;
console.log('读取：' + newPlayer);
console.log('读取：' + newPlayer.length);
console.log(temp);



for ( var i = 0; i < gameDaysNum.length; i++) {
	game_day.innerHTML = '第' + gameDaysNum[(murderNumArray.length)/2] + '天';

}


function btnGame(){
	var game_entry1 = document.getElementById('game-entry1'),
		game_entry2 = document.getElementById('game-entry2'),
		game_entry3 = document.getElementById('game-entry3'),
		game_entry4 = document.getElementById('game-entry4'),
		game_entry5 = document.getElementById('game-entry5'),
		game_entry6 = document.getElementById('game-entry6'),
		game_entry7 = document.getElementById('game-entry7'),
		game_entry8 = document.getElementById('game-entry8');
	game_entry1.onclick = game_type_btn1;
	game_entry2.onclick = game_type_btn2;
	game_entry3.onclick = game_type_btn2;
	game_entry4.onclick = game_type_btn2;
	game_entry5.onclick = game_type_btn2;
	game_entry6.onclick = game_type_btn2;
	game_entry7.onclick = game_type_btn2;
	game_entry8.onclick = game_type_btn2;
}

btnGame();


function game_type_btn1(){
	location.href = 'js-task04-3.html';
}

function game_type_btn2(){
	alert('暂未开放');
}
