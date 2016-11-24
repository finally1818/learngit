/**
 * Created by finally on 2016/9/14.
 */

	var gridColor = 0;          //声明变量gridColor，并赋值0
	function discolor(){        //设置函数discolor()
		var color;              //函数内声明变量color，颜色
		var colorNum;           //函数内声明变量colorNum，颜色编号
		var colorName;          //函数内声明变量colorName，颜色名称
		var grid9 = document.getElementsByClassName("grid");            //函数内声明变量grid9，格子。并通过getElementByClassName获取class为grid的div标签
		var gridNum;            //函数内声明变量gridNum，格子编号
		colorNum = Math.floor(Math.random() * 3);           //colorNum随机0~2
		gridNum = Math.floor(Math.random() * 9);            //gridNum随机0~8
		switch(colorNum){       //colorNum多种选择
			case 0:             //第一种选择
				color = "red";          //color执行red
				colorName = "红色";       //colorName为“红色”
				break;                      //终止执行
			case 1:
				color = "green";
				colorName = "绿色";
				break;
			case 2:
				color = "blue";
				colorName = "蓝色";
				break;
		}
		grid9[gridColor].style.backgroundColor = "orange";              //执行grid9[gridColor]的数组样式底色为"orange",从而使得其再次执行时颜色回归初始化。
		gridColor = gridNum;            //gridColor赋值gridNum，当gridNum随机变换数值时，gridColor也会跟着变换数值，从而记录变色区域的位置
		grid9[gridNum].style.backgroundColor = color;             //执行grid9[gridNum]的数组样式底色为color，color选取由colorNum决定，随机
		console.log("格子" + (gridNum + 1) + "变成了" + colorName);              //console.log输出
	}
	setInterval(discolor,1000);             //setInterval计时器（执行代码，交互时间）


