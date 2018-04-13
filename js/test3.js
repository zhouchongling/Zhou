var canvas = document.getElementById("easel");
var stage = new createjs.Stage(canvas);
	
var shadow1 = new createjs.Bitmap("images/3.1.jpg");
var shadow2 = new createjs.Bitmap("images/4.1.jpg");
var shadow3 = new createjs.Bitmap("images/4.2.png");
var shadow4 = new createjs.Bitmap("images/4.9.png");
var icon = new createjs.Bitmap("images/3.2.png");
var container=new createjs.Container();

container.addChild(shadow1);
stage.addChild(shadow2);
stage.addChild(shadow3);
stage.addChild(shadow4);
stage.addChild(container);
stage.addChild(icon);

icon.alpha = 0;
shadow2.alpha = 0;
shadow3.alpha = 0;
shadow4.alpha = 0;
icon.mouseEnabled = false;

createjs.Touch.enable(stage);

var oldY;

container.addEventListener("mousedown",function(e){
    oldY= e.stageY;
});

container.addEventListener("pressmove", function (e) {

    e.target.y= Math.min( e.target.y+e.stageY-oldY,0);
    e.target.y= Math.max( e.target.y+e.stageY-oldY,-2280);
    oldY= e.stageY;
    console.log( e.target.y)
    if (e.target.y < (-2100)){
        icon.mouseEnabled = true;
        createjs.Tween.get(icon).to({alpha:1},200);
    }
});

icon.addEventListener("click",function(e){
    createjs.Tween.get(shadow2).to({alpha:1},500);
    createjs.Tween.get(shadow3).to({alpha:1},500);
    createjs.Tween.get(shadow4).to({alpha:1},500);
    window.setTimeout("window.location.href='index4.html'",500);
})

    createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick",function() {
		stage.update();

	});

// createjs.Touch.disable(stage);

