/**
 * Created by finally on 2016/10/1.
 */

var temp = localStorage,
	newPlayer = JSON.parse(temp.ids),
	murderArray = JSON.parse(temp.murder),
	murderNumArray = JSON.parse(temp.murderNum),
	stage = JSON.parse(temp.stage);
console.log('读取：' + murderArray);
console.log('读取：' + murderNumArray);
console.log(temp);


var game_zone = document.getElementById('game-zone'),
	playersNum = newPlayer.length,
	mNA = murderNumArray.length,
	i = 0,
	x = 0,
	game_zone_text = [],
	murder,
	murderNum,
	checked,
	game_deal;

for ( var a = 0; a < playersNum; a++ ) {
	game_zone_text +=
		'<div class="game-zone-gamer" id="game-zone-gamer"' + a +
		'><span class="gamer-name">' + newPlayer[a] + '</span>' +
		'<span class="gamer-num">' + (a + 1) + '号</span>' +
		'</div>';
	i++;
}

game_zone.innerHTML = game_zone_text;

for ( var j = 0; j < mNA; j++) {
	var game_zone_gamer = document.getElementsByClassName('game-zone-gamer');
	var zone = game_zone_gamer[murderNumArray[j] - 1];
	zone.style.opacity = "0.5";
}

function gameKill() {
	for (var x = 0; x < playersNum; x++) {
		checked[x].style.borderColor = "#FFFFFF";
		if (this.style.opacity == "0.5") {
			alert('该名玩家已死');
			break;
		} else {
			this.style.borderColor = '#fab344';
			murder = newPlayer[this.index];         //murder赋值被选择杀死的人
			murderNum = this.index + 1;             //murderNum赋值被杀死的人的编号
		}
	}
	console.log(murderNum,murder);
}


function game_btn(){
	if ( murder == undefined){
		alert('请选择一名玩家')
	}
	else {
		murderArray.push(murder);                          //数组内添加murder
		temp.murder = JSON.stringify(murderArray);         //存储数组murderArray
		murderNumArray.push(murderNum);                    //数组内添加murderNum
		temp.murderNum = JSON.stringify(murderNumArray);          //存储数组murderNumArray
		stage.pop();                                        //移除数组内最后一个元素
		stage.push("stageVote");                             //将元素添加到数组内
		temp.stage = JSON.stringify(stage);                 //存储数组stage
		console.log(temp);
		location.href = 'js-task04-4.html';
	}
}

function btnGame(){
	game_deal = document.getElementById('game-deal');
	game_deal.onclick = game_btn;
	for ( var j = 0; j < playersNum; j++) {
		checked = document.getElementsByClassName('game-zone-gamer');
		checked[j].index = j;
		checked[j].onclick = gameKill;
	}
}

btnGame();