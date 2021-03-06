var canvas = document.getElementById("easel");
var	stage = new createjs.Stage(canvas);

a();

function a() {
    var shadow1 = new createjs.Bitmap("images/0.1.jpg");
    var shadow2 = new createjs.Bitmap("images/0.2.png");

    stage.addChild(shadow1);
    stage.addChild(shadow2);

    shadow1.addEventListener("mousedown",function(e){
        music1.play();
        b();
    });

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",function() {
        stage.update();
    })
}

function b() {
    var id = 0;
    var i = 0;

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
                c();
                id=3;
                break;
        }
    });

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",function() {
        stage.update();
    })
}

function c() {
    var count=0;
    var i=0;
    var currentId=0;
    var time = 0;

    var shadow1 = new createjs.Bitmap("images/2.1.jpg");
    var shadow2 = new createjs.Bitmap("images/2.2.jpg");
    var shadow3 = new createjs.Bitmap("images/2.3.jpg");
    var shadow4 = new createjs.Bitmap("images/3.1.jpg");
    var icon = new createjs.Bitmap("images/2.4.png");
    var icon1 = new createjs.Bitmap("images/2.5.png")
    var rotation = 2;

    stage.addChild(shadow1);
    stage.addChild(shadow2);
    stage.addChild(shadow3);
    stage.addChild(shadow4);
    stage.addChild(icon);
    stage.addChild(icon1);

    shadow2.alpha = 0;
    shadow3.alpha = 0;
    shadow4.alpha = 0;
    icon1.alpha = 0;

    icon.x = 620;
    icon.y = 1030;
    icon.regX = 40;
    icon.regY = 70;
    icon.rotation = -15;

    icon1.mouseEnabled = false;

    window.addEventListener("deviceorientation", function(event) {
        // 处理event.alpha、event.beta及event.gamma
    }, true);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick(event) {

        stage.update();

        if (time<15){
            icon.rotation += rotation;
            time += 1;
        }
        else{
            time =0
            rotation = -rotation;
        }

        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion',deviceMotionHandler, false);
        }
        var speed = 1.5;//speed
        var x = y = z = lastX = lastY = lastZ = 0;
        function deviceMotionHandler(eventData) {
            var acceleration =eventData.accelerationIncludingGravity;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            if( Math.abs(y-lastY) > speed ) {
                switch(currentId){
                    case 0:
                        if(count>30){
                            createjs.Tween.get(shadow2).to({alpha:1},200);
                            currentId++;
                            i=count;
                        }
                        break;

                    case 1:
                        if(count> (i+50)){
                            createjs.Tween.get(shadow3).to({alpha:1},200);
                            stage.removeChild(icon);
                            icon1.mouseEnabled = true;
                            createjs.Tween.get(icon1).wait(700).to({alpha:1},200);
                        }
                        break;
                }
                count++;
            }
            lastX = x;
            lastY = y;
            lastZ = z;
        }
    }

    icon1.addEventListener("click",function(e){
        createjs.Tween.get(shadow4).to({alpha:1},500);
        window.setTimeout("window.location.href='index3.html'",500);
    })
}
