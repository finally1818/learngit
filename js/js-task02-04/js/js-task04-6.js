/**
 * Created by finally on 2016/10/1.
 */

var temp = localStorage,
	newPlayer = JSON.parse(temp.ids),
	murderArray = JSON.parse(temp.murder),
	murderNumArray = JSON.parse(temp.murderNum),
	winner = temp.winner;

console.log(temp);
console.log(newPlayer);
console.log(murderArray);
console.log(murderNumArray);

var game_cup_win = document.getElementById('game-cup-win'),
	game_cup_text = document.getElementById('game-cup-text'),
	game_result = document.getElementById('game-result'),
	game_course = document.getElementById('game-course'),
	game_course_text = [],
	playersNum = newPlayer.length,
	killerNum = Math.floor(playersNum/4),           //task2-3的方法算出一共有几名杀手
	peopleNum = playersNum - killerNum,
	mNA = murderNumArray.length;




game_cup_win.innerHTML = winner + '胜利';
game_cup_text.innerHTMl = '太棒了!你知道么？在杀人游戏中只有' + peopleNum/playersNum + '%的卧底取得游戏最终的胜利哦！';
game_result.innerHTML = '本次游戏共计用时0小时25分钟<br>杀&emsp;手' + killerNum + '人&emsp;&emsp;水&emsp;民' + peopleNum + '人<br>卧底词汇：爱新觉罗<br>水民词汇：努尔哈赤';
for (var i = 0,j = 0; i < mNA/2; i++) {
	game_course_text += '<div class="game-course"><span class="game-course-day">第' + (i+1) +'天</span><span class="game-course-time">0小时07分</span><span class="game-course-text">晚上：' + murderNumArray[j] + '号被杀手杀死，' + murderNumArray[j] + '号是' + murderArray[j] + '<br>白天：' + murderNumArray[j+1] + '号被全民投票投死，' + murderNumArray[j+1] + '号是' + murderArray[j+1] + '</span></div>';
	game_course.innerHTML = game_course_text;
	j = j+2;
}

function gameAgain(){
	location.href = "js-task02-2.html";
}

function gameShare(){
	alert('暂未开放');
}

function btnGame(){
	var footer_again = document.getElementById('footer-again'),
		footer_share = document.getElementById('footer-share');
	footer_again.onclick = gameAgain;
	footer_share.onclick = gameShare;
}

btnGame();