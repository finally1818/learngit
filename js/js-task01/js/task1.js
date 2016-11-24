/**
 * Created by finally on 2016/9/8.
 */

var grid9=0;
function discolor() {
    //初始颜色为#FFA500
    var initial = "#FFA500";
    //变化颜色数组
    var colorGroup = ["#ff0000","#008000","#0000FF"];
    //color[0] = "#ff0000";
    //color[1] = "#008000";
    //color[2] = "#0000ff";
    //各个颜色名称
    var colorName = ["红色","绿色","蓝色"];
    //name[0] = "红色";
    //name[1] = "绿色";
    //name[2] = "蓝色";
    //随机取颜色,*3即0、1、2三个数据
    var colorNum = Math.floor(Math.random() * 3);
    //建立盒子数组
    var box = document.getElementsByClassName("grid");
    //随机取盒子，*9即0~8九个数据
    var boxNum = Math.floor(Math.random() * 9);
    //之前变色区域恢复初始颜色
    box[grid9].style.backgroudColor = initial;
    //改变随机区域颜色
    box[boxNum].style.backgroundColor = colorGroup[colorNum];
    // 输出log
    grid9 = boxNum;
    console.log("格子" + (boxNum + 1) + "变成了" + colorName[colorNum]);
}

 setInterval("discolor()", 1000);