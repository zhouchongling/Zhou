var canvas = document.getElementById("easel");
var	stage = new createjs.Stage(canvas);
var id=0;
	
var shadow1 = new createjs.Bitmap("images/1.1.jpg");
var shadow2 = new createjs.Bitmap("images/1.2.png");
var shadow3 = new createjs.Bitmap("images/1.3.png");
var shadow4 = new createjs.Bitmap("images/1.4.jpg");
var shadow5 = new createjs.Bitmap("images/2.1.jpg");

stage.addChild(shadow1);
stage.addChild(shadow2);
stage.addChild(shadow3);
stage.addChild(shadow4);
stage.addChild(shadow5);
shadow3.alpha = 0;
shadow4.alpha = 0;
shadow5.alpha = 0;

shadow1.addEventListener("mousedown",function(e){
	switch (id){
		case 0:
            createjs.Tween.get(shadow2).to({alpha:0},500);
            createjs.Tween.get(shadow3).to({alpha:1},500);
            id=1;
        break;

        case 1:
            createjs.Tween.get(shadow4).to({alpha:1},500);
            id=2;
        break;

		case 2:
            createjs.Tween.get(shadow5).to({alpha:1},500);
            window.setTimeout("window.location.href='index2.html'",500);
        break;
	}
});

createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick",function() {
		stage.update();
	})
