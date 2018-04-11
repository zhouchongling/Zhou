var canvas = document.getElementById("easel"),
    stage = new createjs.Stage(canvas);

createjs.Touch.enable(stage);

var id = 0,
    i = 0,
    speed = -1;

var shadow1 = new createjs.Bitmap("images/4.1.jpg"),
    shadow2 = new createjs.Bitmap("images/4.2.png"),
    shadow3 = new createjs.Bitmap("images/4.3.png"),
    shadow4 = new createjs.Bitmap("images/4.4.png"),
    shadow5 = new createjs.Bitmap("images/4.5.png"),
    shadow6 = new createjs.Bitmap("images/4.6.png"),
    shadow7 = new createjs.Bitmap("images/4.7.png"),
    shadow8 = new createjs.Bitmap("images/4.8.png"),
    shadow9 = new createjs.Bitmap("images/4.9.png"),
    shadow10 = new createjs.Bitmap("images/4.10.png"),
    shadow11 = new createjs.Bitmap("images/4.10.png"),
    shadow12 = new createjs.Bitmap("images/4.10.png");
    shadow3.alpha = 0;
    shadow4.alpha = 0;
    shadow5.alpha = 0;
    shadow6.alpha = 0;
    shadow7.alpha = 0;
    shadow9.alpha = 0;
    shadow10.alpha = 0;
    shadow11.alpha = 0;
    shadow12.alpha = 0;

stage.addChild(shadow1,shadow2,shadow3,shadow4,shadow5,shadow6,shadow7,shadow8,shadow9,shadow10,shadow11,shadow12);

shadow2.y = -200;
shadow10.x = -10;
shadow11.x = -10;
shadow12.x = -10;

shadow1.addEventListener("click",function(e){
    switch (id) {
        case 0:
            createjs.Ticker.setFPS(30);
            createjs.Ticker.addEventListener("tick", function () {
            if(shadow2.y < 30) {
                shadow1.mouseEnabled = false;
                shadow2.y += 4;
                shadow8.y += 4;
                if (i < 10){
                    shadow2.x += speed;
                    shadow8.x += speed;
                    i= i+1;
                }
                else{
                    speed = -speed;
                    i=0;
                }
            }
            else {
                createjs.Tween.get(shadow2).to({alpha: 0}, 100);
                createjs.Tween.get(shadow3).to({alpha: 1}, 100);
                id = 1;
                shadow1.mouseEnabled = true;
            }
            })
        break;

        case 1:
            stage.removeChild(shadow3);
            createjs.Tween.get(shadow10).to({alpha: 1}, 100);
            createjs.Ticker.setFPS(30);
            createjs.Ticker.addEventListener("tick", function () {
                if(shadow1.y > -490) {
                    shadow1.mouseEnabled = false;
                    shadow1.y -= 5;
                    if (i < 10){
                        shadow10.x += speed;
                        shadow8.x += speed;
                        i= i+1;
                    }
                    else{
                        speed = -speed;
                        i=0;
                    }
                }
                else {
                    createjs.Tween.get(shadow10).to({alpha: 0}, 100);
                    createjs.Tween.get(shadow4).to({alpha: 1}, 100);
                    id = 2;
                    shadow1.mouseEnabled = true;
                }
            })
        break;

        case 2:
            stage.removeChild(shadow4);
            createjs.Tween.get(shadow11).to({alpha: 1}, 100);
            createjs.Ticker.setFPS(30);
            createjs.Ticker.addEventListener("tick", function () {
                if(shadow1.y > -1010) {
                    shadow1.mouseEnabled = false;
                    shadow1.y -= 5;
                    if (i < 10){
                        shadow11.x += speed;
                        shadow8.x += speed;
                        i= i+1;
                    }
                    else{
                        speed = -speed;
                        i=0;
                    }
                }
                else {
                    createjs.Tween.get(shadow11).to({alpha: 0}, 100);
                    createjs.Tween.get(shadow5).to({alpha: 1}, 100);
                    id = 3;
                    shadow1.mouseEnabled = true;
                }
            })
        break;

        case 3:
            stage.removeChild(shadow5);
            createjs.Tween.get(shadow12).to({alpha: 1}, 100);
            createjs.Ticker.setFPS(30);
            createjs.Ticker.addEventListener("tick", function () {
                if(shadow1.y > -1465) {
                    shadow1.mouseEnabled = false;
                    shadow1.y -= 5;
                    shadow12.y += 1.3;
                    shadow8.y += 1.3;
                    if (i < 10){
                        shadow12.x += speed;
                        shadow8.x += speed;
                        i= i+1;
                    }
                    else{
                        speed = -speed;
                        i=0;
                    }
                }
                else {
                    createjs.Tween.get(shadow12).to({alpha: 0}, 100);
                    createjs.Tween.get(shadow6).to({alpha: 1}, 100);
                    id = 4;
                    shadow1.mouseEnabled = true;
                }
            })
        break;

        case 4:
            stage.removeChild(shadow6);
            createjs.Tween.get(shadow7).to({alpha: 1}, 200);
            createjs.Tween.get(shadow9).wait(1300).to({alpha: 1}, 100);
            createjs.Tween.get(shadow8).wait(1300).to({alpha: 0}, 100);
        break;
    }
})

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",function() {
    stage.update();
})

createjs.Touch.disable(stage);

