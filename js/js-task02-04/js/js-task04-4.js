/**
 * Created by finally on 2016/9/29.
 */

var temp = localStorage,
	newPlayer = JSON.parse(temp.ids),
	murderArray = JSON.parse(temp.murder),
	murderNumArray = JSON.parse(temp.murderNum),
	deathKillArray = JSON.parse(temp.deathKill),
	stage = JSON.parse(temp.stage);
console.log(temp);
console.log(newPlayer);
console.log(murderArray,murderArray.length);
console.log(murderNumArray,murderNumArray.length);



var	playersNum = newPlayer.length,
	mNA = murderNumArray.length,
	deathKill_text,
	deathVote_text,
	gameDaysNum = ["一","二","三","四","五","六","七","八","九","十"],
	deathKill = document.getElementById('game-decode-deathKill'),
	game_vote_go = document.getElementById('game-vote-go'),
	game_vote = document.getElementById('game-vote');

for ( var i = 0; i < playersNum; i++) {
	if ( stage[0] == "stageKill" ) {
		game_vote.style.display = 'block';
		deathKill_text = '<div class="game-decode-text">' + murderNumArray[mNA - 1] + '号被杀手杀死了，真实身份是' + newPlayer[murderNumArray[mNA - 1]-1] + '</div>';
		game_vote_go.innerHTML = "去投票";
		deathKill.innerHTML = deathKill_text + deathKillArray;
		break;
	}
	else if (stage[0] == "stageVote"){
		game_vote.style.display = 'none';
		deathVote_text = '<div class="game-decode-text">' + murderNumArray[mNA - 1] + '号被投票投死了，真实身份是' + newPlayer[murderNumArray[mNA - 1]-1] + '</div>';
		game_vote_go.innerHTML = "第" + gameDaysNum[(mNA)/2] + "天";
		deathKill.innerHTML = deathVote_text + deathKillArray;
		break;
	}
}

//判断胜负前先计算条件
for (var x = 0, y = 0, z = 0; x < playersNum; x++){
	if (murderArray[x] == "水&emsp;民") {             //死亡名单中每有1个水民，则y+1
		y++;
		console.log(y);
	} else if (murderArray[x] == "杀&emsp;手"){           //死亡名单中每有1个杀手，则z+1
		z++;
		console.log(z);
	}
}

//判断胜负
var killerNum = Math.floor(playersNum/4),               //task2-3的方法算出一共有几名杀手
	peopleNum = playersNum - killerNum;
if ( killerNum == z ) {                                 //当原有杀手人数 == 死亡名单中杀手的人数，则水民胜利
	game_vote_go.innerHTML = "水民胜利，查看结果";
} else if (killerNum - z >= peopleNum - y){            //原有杀手人数 - 死亡的杀手人数 == 存活的杀手人数，原水民人数 - 死亡的水民人数 == 存活的水民人数。当存活的杀手人数 >= 存活的水民人数，则杀手胜利
	game_vote_go.innerHTML = "杀手胜利，查看结果";
}

function game_btn(){
	if (killerNum == z) {
		temp.setItem('winner',"水民");            //保存胜利者水民winner参数
		location.href = 'js-task04-6.html';
	}
	else if(killerNum - z >= peopleNum - y) {
		temp.setItem('winner',"杀手");            //保存胜利者杀手winner参数
		location.href = 'js-task04-6.html';
	}
	else {
		if (stage[0] == "stageKill") {
			deathKillArray = deathKill_text + deathKillArray;
			temp.setItem('deathKill',JSON.stringify(deathKillArray));
			location.href = 'js-task04-5.html';
		}
		else if (stage[0] == "stageVote"){
			deathKillArray = deathVote_text + deathKillArray;
			temp.setItem('deathKill',JSON.stringify(deathKillArray));
			location.href = 'js-task04-2.html';
		}
	}
}

function btnGame(){
	game_vote_go.onclick = game_btn;
}

btnGame();



