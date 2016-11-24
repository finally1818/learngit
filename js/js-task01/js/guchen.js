/**
 * Created by finally on 2016/9/8.
 */
var lastone = 0;

function changecolor() {

    var color;
    var colorsnumber;
    var colorname;
    var grid = document.getElementsByClassName("square");
    var gridnumber;

    grid[lastone].style.backgroundColor = "#e8830d";
    colorsnumber = Math.floor(Math.random() * 3);//0~2随机数*/
    switch (colorsnumber) {
        case 0:
            color = "red";
            colorname = "红色";
            break;
        case 1:
            color = "green";
            colorname = "绿色";
            break;
        case 2:
            color = "blue";
            colorname = "蓝色";
            break;
    }
    gridnumber = Math.floor(Math.random() * 9);//0~8随机数*/
    grid[gridnumber].style.backgroundColor = color;
    lastone = gridnumber;
    console.log("格子" + (gridnumber + 1) + "变成了" + colorname);
}
setInterval("changecolor()", 1000);



/*lastone作为局部变量版本
 function Test() {
 var lastone = 0;

 return function changecolor() {

 var color ;
 var colorsnumber;
 var colorname;
 var grid = document.getElementsByClassName("square");
 var gridnumber;
 grid[lastone].style.backgroundColor = "#e8830d";
 colorsnumber = Math.floor(Math.random() * 3);//0~2随机数*!/
 switch (colorsnumber) {
 case 0:
 color = "red";
 colorname = "红色";
 break;
 case 1:
 color = "green";
 colorname = "绿色";
 break;
 case 2:
 color = "blue";
 colorname = "蓝色";
 break;
 }
 gridnumber = Math.floor(Math.random() * 9);//0~8随机数*!/
 grid[gridnumber].style.backgroundColor = color;
 lastone = gridnumber;

 console.log("格子" + (gridnumber + 1) + "变成了" + colorname);
 }
 }
 var test = Test()
 setInterval(test, 1000);*/
