var canvas = document.getElementById("easel"),
    stage = new createjs.Stage(canvas);

createjs.Touch.enable(stage);

var time = 0,
    id = 0;
    rotation = 1.5;

var shadow1 = new createjs.Bitmap("images/5.1.jpg"),
    shadow2 = new createjs.Bitmap("images/5.2.png"),
    shadow3 = new createjs.Bitmap("images/5.6.png"),
    shadow4 = new createjs.Bitmap("images/5.5.png"),
    shadow5 = new createjs.Bitmap("images/5.4.png"),
    shadow6 = new createjs.Bitmap("images/5.3.png"),
    shadow7 = new createjs.Bitmap("images/0.3.jpg");
    icon = new createjs.Bitmap("images/5.7.png");

stage.addChild(shadow1,shadow2,shadow3,shadow4,shadow5,shadow6,shadow7,icon);

shadow2.x = 150;
shadow2.y = 1050;
shadow2.regX = 110;
shadow2.regY = 100;

icon.alpha = 0;
shadow7.alpha = 0;

icon.mouseEnabled = false;

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", handleTick);
function handleTick(event) {

    stage.update();

    if (time < 15) {
        shadow2.rotation += rotation;
        time += 1;
    }
    else {
        time = 0
        rotation = -rotation;
    }
}

shadow2.addEventListener("click",function(e){
    switch (id) {
        case 0:
            music3.play();
            shadow6.alpha = 0;
            id++;
            break;

        case 1:
            shadow5.alpha = 0;
            id++;
            break;

        case 2:
            shadow4.alpha = 0;
            id++;
            createjs.Tween.get(shadow2).wait(500).to({alpha: 0}, 100);
            icon.mouseEnabled = true;
            createjs.Tween.get(icon).wait(1500).to({alpha: 1}, 200);
            break;
    }
})

icon.addEventListener("click",function(e){
    icon.alpha = 0;
    createjs.Tween.get(shadow7).to({alpha: 1}, 700);
})
