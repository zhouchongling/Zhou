var canvas = document.getElementById("easel");
var stage = new createjs.Stage(canvas);

a();

function a() {
    var shadow1 = new createjs.Bitmap("images/3.1.jpg");
    var shadow2 = new createjs.Bitmap("images/4.1.jpg");
    var shadow3 = new createjs.Bitmap("images/4.2.png");
    var shadow4 = new createjs.Bitmap("images/4.9.png");
    var icon = new createjs.Bitmap("images/3.2.png");
    var container = new createjs.Container();

    stage.addChild(shadow1);
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

    container.addEventListener("mousedown", function (e) {
        music2.play();
        oldY = e.stageY;
    });

    container.addEventListener("pressmove", function (e) {

        e.target.y = Math.min(e.target.y + e.stageY - oldY, 0);
        e.target.y = Math.max(e.target.y + e.stageY - oldY, -2280);
        oldY = e.stageY;
        console.log(e.target.y)
        if (e.target.y < (-2100)) {
            icon.mouseEnabled = true;
            createjs.Tween.get(icon).to({alpha: 1}, 200);
        }
    });

    icon.addEventListener("click", function (e) {
        b();
    })

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", function () {
        stage.update();

    });
}

function b() {
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
        shadow11 = new createjs.Bitmap("images/4.11.png"),
        shadow12 = new createjs.Bitmap("images/4.12.png"),
        shadow13 = new createjs.Bitmap("images/5.1.jpg"),
        shadow14 = new createjs.Bitmap("images/5.3.png"),
        icon = new createjs.Bitmap("images/4.13.png");
    shadow3.alpha = 0;
    shadow4.alpha = 0;
    shadow5.alpha = 0;
    shadow6.alpha = 0;
    shadow7.alpha = 0;
    shadow9.alpha = 0;
    shadow10.alpha = 0;
    shadow11.alpha = 0;
    shadow12.alpha = 0;
    icon.alpha = 0;

    stage.addChild(shadow1,shadow2,shadow3,shadow4,shadow5,shadow6,shadow7,shadow8,shadow9,shadow10,shadow11,shadow12,icon);

    shadow2.y = -200;
    shadow10.x = -10;
    shadow11.x = -10;
    shadow12.x = -10;

    icon.mouseEnabled = false;

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
                createjs.Tween.get(icon).wait(1800).to({alpha: 1}, 200);
                createjs.Tween.get(shadow7).to({alpha: 1}, 200);
                createjs.Tween.get(shadow9).wait(1300).to({alpha: 1}, 100);
                createjs.Tween.get(shadow8).wait(1300).to({alpha: 0}, 100);
                icon.mouseEnabled = true;
                break;
        }
    })

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",function() {
        stage.update();
    })

    icon.addEventListener("click",function(e){
        createjs.Tween.get(shadow13).to({alpha:1},500);
        createjs.Tween.get(shadow14).to({alpha:1},500);
        window.setTimeout("window.location.href='index5.html'",500);
    })

    createjs.Touch.disable(stage);
}

