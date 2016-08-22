/*
Name : Abinav Sharda
Student NO: 300868625
*/
document.getElementById("body").addEventListener("load",init());
var canvas;
var text;
var pic;
var stage;
var direction;
/**
 * @ function: init()
 */
function init(){
canvas=document.getElementById("canvas");
stage = new createjs.Stage(canvas);
text = new createjs.Text(" D \n R \n A \n G \n O \n N \n B \n A \n L \n L \n Z ", "45px veranda", "#000");
text.x = 50;
text.y = 175;
text.regX=250*0.5;
text.regY=250*0.5;
stage.addChild(text);
createjs.Ticker.framerate = 35;
createjs.Ticker.addEventListener("tick", loop);
text.addEventListener("click", function(){
window.open("dbz/Assigment3.html");
}, true);
pic = new createjs.Bitmap("./Assets/faltu.png");
pic.x = 125;
stage.addChild(pic);
}
/**
 * @ function: loop()

 */
function loop(){
    if(direction){
        text.x -= 8;
        pic.x += 4;
        if(text.x >= 400 && pic.x <= -225){direction = false}
    }
    else{
        text.x += 0.4;
        pic.x -= 4.5;
        if(text.x <= 0 && pic.x >= 275){direction = true}
    }
    stage.update();
}
