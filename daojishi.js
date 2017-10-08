var digit =
            [
                [
                    [0,0,1,1,1,0,0],
                    [0,1,1,0,1,1,0],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [0,1,1,0,1,1,0],
                    [0,0,1,1,1,0,0]
                ],//0
                [
                    [0,0,0,1,1,0,0],
                    [0,1,1,1,1,0,0],
                    [0,0,0,1,1,0,0],
                    [0,0,0,1,1,0,0],
                    [0,0,0,1,1,0,0],
                    [0,0,0,1,1,0,0],
                    [0,0,0,1,1,0,0],
                    [0,0,0,1,1,0,0],
                    [0,0,0,1,1,0,0],
                    [1,1,1,1,1,1,1]
                ],//1
                [
                    [0,1,1,1,1,1,0],
                    [1,1,0,0,0,1,1],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,1,1,0],
                    [0,0,0,1,1,0,0],
                    [0,0,1,1,0,0,0],
                    [0,1,1,0,0,0,0],
                    [1,1,0,0,0,0,0],
                    [1,1,0,0,0,1,1],
                    [1,1,1,1,1,1,1]
                ],//2
                [
                    [1,1,1,1,1,1,1],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,1,1,0],
                    [0,0,0,1,1,0,0],
                    [0,0,1,1,1,0,0],
                    [0,0,0,0,1,1,0],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [0,1,1,1,1,1,0]
                ],//3
                [
                    [0,0,0,0,1,1,0],
                    [0,0,0,1,1,1,0],
                    [0,0,1,1,1,1,0],
                    [0,1,1,0,1,1,0],
                    [1,1,0,0,1,1,0],
                    [1,1,1,1,1,1,1],
                    [0,0,0,0,1,1,0],
                    [0,0,0,0,1,1,0],
                    [0,0,0,0,1,1,0],
                    [0,0,0,1,1,1,1]
                ],//4
                [
                    [1,1,1,1,1,1,1],
                    [1,1,0,0,0,0,0],
                    [1,1,0,0,0,0,0],
                    [1,1,1,1,1,1,0],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [0,1,1,1,1,1,0]
                ],//5
                [
                    [0,0,0,0,1,1,0],
                    [0,0,1,1,0,0,0],
                    [0,1,1,0,0,0,0],
                    [1,1,0,0,0,0,0],
                    [1,1,0,1,1,1,0],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [0,1,1,1,1,1,0]
                ],//6
                [
                    [1,1,1,1,1,1,1],
                    [1,1,0,0,0,1,1],
                    [0,0,0,0,1,1,0],
                    [0,0,0,0,1,1,0],
                    [0,0,0,1,1,0,0],
                    [0,0,0,1,1,0,0],
                    [0,0,1,1,0,0,0],
                    [0,0,1,1,0,0,0],
                    [0,0,1,1,0,0,0],
                    [0,0,1,1,0,0,0]
                ],//7
                [
                    [0,1,1,1,1,1,0],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [0,1,1,1,1,1,0],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [0,1,1,1,1,1,0]
                ],//8
                [
                    [0,1,1,1,1,1,0],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [1,1,0,0,0,1,1],
                    [0,1,1,1,0,1,1],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,0,1,1],
                    [0,0,0,0,1,1,0],
                    [0,0,0,1,1,0,0],
                    [0,1,1,0,0,0,0]
                ],//9
                [
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,1,1,0],
                    [0,1,1,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,1,1,0],
                    [0,1,1,0],
                    [0,0,0,0],
                    [0,0,0,0]
                ]//:
            ];
var cas = document.getElementById('canvas');
if(cas.getContext){
    var cxt = cas.getContext('2d');
};
var window_width = document.documentElement.clientWidth;
var window_height = document.documentElement.clientHeight;
cas.width = window_width;
cas.height = window_height;
var r = 12;//设置小球半径
var x_off = 100;//设置两数字间距

var iMax = digit[0][0].length;
var jMax = digit[0].length;
var margin_top = 120;
var margin_left = 120;
var balls = [];

var colors=["#33B5E5","#0099CC","#AA66CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000","#9933CC"];
var nTime = new Date(2017,10,15,00,00,00);
var iTime = new Date();
var cTime = (nTime - iTime)/1000;

setInterval(function(){
    render();
    update();

},50);


function render(){
    //12:23:45
    //var iTime = new Date();
    //var cTime = (nTime - iTime)/1000;
    var iHour = toZero(Math.floor(cTime/3600)) ;
    var iMint = toZero(Math.floor(cTime%86400%3600/60));
    var iSec = toZero(Math.floor(cTime%60));
    var str = iHour+ '.' + iMint + '.'+ iSec;

  
    ///////////////////////////////////////////////////////////
    cxt.clearRect(0,0,cas.width,cas.height);
    for(var i = 0;i < str.length;i++){
        var num = str.charAt(i) == '.'?10: Number(str.charAt(i));
        renderNum(num,margin_left + x_off * i,r);

    };
    ////////////////////////////////////////////////////////////
    for(var i=0;i<balls.length;i++){
        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,balls[i].R,0,Math.PI*2,true);
        cxt.fillStyle = balls[i].color;
        cxt.fill();
    }

};

function update(){

    var iTime1 = new Date();
    var cNextTime = (nTime - iTime1) /1000;
    var iNextHour = toZero(Math.floor(cNextTime/3600));
    var iNextMin = toZero(Math.floor(cNextTime%3600/60));
    var iNextSec = toZero(Math.floor(cNextTime%60));
    var strNext = iNextHour + '.' + iNextMin + '.' + iNextSec; 

    var iHour = toZero(Math.floor(cTime/3600)) ;
    var iMint = toZero(Math.floor(cTime%86400%3600/60));
    var iSec = toZero(Math.floor(cTime%60));
    var str = iHour+ '.' + iMint + '.'+ iSec;

    if(iNextSec != iSec){
        cTime = cNextTime;
        for(var i = 0;i < str.length;i++){
            if(strNext.charAt(i) != str.charAt(i)){
                addBalls(strNext.charAt(i),margin_left+ x_off * i,r);
             };
        }
    }


    updateBalls();
  

    
};

function updateBalls(){
   for(var i=0;i<balls.length;i++){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if(balls[i].y >= window_height - r/2){
            balls[i].y = window_height - r/2;
            balls[i].vy = -balls[i].vy*0.75;
        };
   }
    var cnt=0;
    for(var i=0;i<balls.length;i++){
        if(balls[i].x+r>0 && balls[i].x-r<window_width){
            balls[cnt++]=balls[i];
        }
    }

    while(balls.length>Math.min(400,cnt)){
        balls.pop();//删除数组末尾的值
    }
    for(var i = 0;i<str.length;i++){

    }; 

};

function addBalls(num,x_off,r){
    for(var i=0;i<iMax;i++){
        for(var j=0;j<jMax;j++){
            if(digit[num][j][i]){
                var ball = {
                        x:r*(i)+x_off,
                        y:r*(j)+margin_top,
                        R:(r/2-1),
                        g:1.5+Math.random(),
                        vx:Math.pow(-1,Math.ceil((Math.random()*1000)))*4,
                        vy:-5,                     
                        color:colors[Math.round(Math.random()*(colors.length-1))]
                    };
                    //console.log(Math.round(Math.random())*colors.length)
                balls.push(ball);
                
            }
        };
    };

}
function renderNum(num,x_off,r,){//显示那为数，位置，小球半径
    for(var i=0;i<iMax;i++){
        for(var j=0;j<jMax;j++){
            if(digit[num][j][i]){
                cxt.fillStyle="blue";
            }else{
                cxt.fillStyle = "#fff";
            };

            cxt.beginPath();
            cxt.arc(r*(i)+x_off,r*(j)+margin_top,(r/2-1),0,Math.PI*2,true);
            cxt.fill();
            cxt.closePath();
        };
    };
};


function toZero(n){
    return n >= 10?n.toString():"0"+n;
};




