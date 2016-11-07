/**
 * Created by finally on 2016/9/24.
 */

var playerStr = localStorage.ids;               //
var newPlayer = JSON.parse(playerStr);          //
console.log("读取：" + newPlayer);
console.log('数组长度：' + newPlayer.length);

var playersNum = newPlayer.length,              //playersNum赋值输出数组长度
	drawNum = 1,                                //翻牌序号赋值1
	i = 0,                                      //i赋值0
	game_num = document.getElementById('game-num'),
	game_img = document.getElementById('game-img'),
	game_role = document.getElementById('game-role'),
	game_word = document.getElementById('game-word'),
	game_info = document.getElementById('game-info'),
	game_deal = document.getElementById('game-deal');

//drawNum初始赋值为1，那么翻牌draw页是1、3、5等单数，查看look页是2、4、6等双数，假设你点击时页面中drawNum=x，通过x先判断是否大于等于数组长度的2倍，小于则判断X%2是否=1，执行look()函数后drawNum才变为2。疑难点应该在于想通判断条件if和执行代码｛｝的问题，判断当前页面是1则执行后当前页面变为2，而不是判断为2执行变成2。
function look(){
	if ( drawNum >= playersNum * 2) {                       //如果翻牌数>=数组长度的2倍时（如x>=12）
		location.href = 'js-task04-1.html';                   //则跳转js-task04.html
	} else if ( drawNum < playersNum * 2 - 1 && drawNum % 2 == 1) {        //如果翻牌数<数组长度的2倍-1（如x<11）且翻牌数/2的余数=1时，为何不是<12？因为这个页面是查看look页，即为偶数页。
		game_img.src = 'images/wow.png';
		game_img.style.marginTop = '3.625rem';
		game_role.innerHTML = '角色：' + newPlayer[i];
		game_word.innerHTML = '词组：西伯利亚';              //西伯利亚其实应该是task2传过来的数组，不过没设置，只能偷懒了。
		game_info.innerHTML = '想办法猜到别人的词，同时还要注意不要暴露自己哦！';
		game_info.style.borderTop = '0.125rem solid #FFFFFF';
		game_deal.innerHTML = '隐藏并传递给' + (i + 2) + '号';
		game_num.innerHTML = i + 1;
		i++;
	} else if ( drawNum >= playersNum * 2 - 1 ) {           //如果翻牌数=数组长度的2倍-1（如x=11），则执行下列｛｝中的代码
		game_img.src = 'images/wow.png';
		game_img.style.marginTop = '3.625rem';
		game_role.innerHTML = '角色：' + newPlayer[i];
		game_word.innerHTML = '词组：西伯利亚';
		game_info.innerHTML = '想办法猜到别人的词，同时还要注意不要暴露自己哦！';
		game_info.style.borderTop = '0.125rem solid #FFFFFF';
		game_deal.innerHTML = '查看法官台本';
		game_num.innerHTML = i + 1;
	} else {                                 //排除其他可能剩下的其实都是偶数页执行下列｛｝中的代码
		game_img.src = 'images/draw.png';
		game_img.style.marginTop = '11.25rem';
		game_role.innerHTML = '';
		game_word.innerHTML = '';
		game_info.innerHTML = '';
		game_info.style.borderTop = '';
		game_deal.innerHTML = '查看' + (i + 1) + '号身份';
		game_num.innerHTML = i + 1;
	}
	drawNum++;
}

//一个按钮跳转事件
function btnDraw(){
	game_deal.onclick = look;
}

btnDraw();
