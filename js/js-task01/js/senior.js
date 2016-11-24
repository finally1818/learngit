/**
 * Created by finally on 2016/9/8.
 */

var lastnum=0;
function discolor() {

    var laftcolor="#FFA500";//small.style.backgroundColor;
    var color=["#ff0000","#008000","#0000FF"];//颜色数组
    var colorname=["红色","绿色","蓝色"];//颜色名称
    var colornum=Math.floor(Math.random()*3);//取颜色的随机数
    var box=document.getElementsByClassName("grid");//建立盒子数组
    var boxnum=Math.floor(Math.random()*9);//取盒子的随机数
    box[lastnum].style.backgroundColor=laftcolor;//之前变色区域变为初始颜色
    lastnum=boxnum;//记录变色区域位置
    box[boxnum].style.backgroundColor=color[colornum];//改变随机区域颜色
    console.log("格子"+(boxnum + 1) +"变成了"+colorname[colornum]);//输出log
    // setTimeout("discolor()",1000) //用两个setTimeout代替setInterval
}
setInterval("discolor()",1000);
//     setTimeout("discolor()",1000);    //用两个setTimeout代替setInterval
