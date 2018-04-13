var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width/2,
	centerY = canvas.height/2;	
	
function init1() {
// 	var canvas = document.getElementById("easel"),
// 	stage = new createjs.Stage(canvas),
// 	centerX = canvas.width/2,
// 	centerY = canvas.height/2;	

	var shadow1 = new createjs.Bitmap("images/1.1.png");
	var shadow2 = new createjs.Bitmap("images/1.2.png");

    stage.addChild(shadow1);
    stage.addChild(shadow2);
    
	stage.update();
}



function init2() {
//     var canvas = document.getElementById("easel"),
// 	stage = new createjs.Stage(canvas),
// 	centerX = canvas.width/2,
// 	centerY = canvas.height/2;

//    createjs.Touch.enable(stage);

    window.addEventListener("deviceorientation", function(event) {
      // 处理event.alpha、event.beta及event.gamma
  }, true);
    
	var shadow1 = new createjs.Bitmap("images/2.1.jpeg");
	var shadow2 = new createjs.Bitmap("images/2.2.jpg");
	var shadow3 = new createjs.Bitmap("images/2.3.jpg");
	
	stage.addChild(shadow1);	
// 		
// 	shadow1.onPress = function(a) {
// 		stage.addChild(shadow2);
// 	}
// 	
// 	shadow2.onPress = function(b) {
// 		stage.addChild(shadow3);
// 	}

if (window.DeviceMotionEvent) { 
                 window.addEventListener('devicemotion',deviceMotionHandler, false);  
        } 
        var speed = 30;//speed
        var x = y = z = lastX = lastY = lastZ = 0;
        function deviceMotionHandler(eventData) {  
          var acceleration =eventData.accelerationIncludingGravity;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed) {
                    //简单的摇一摇触发代码
                    stage.addChild(shadow2);
                }
                lastX = x;
                lastY = y;
                lastZ = z;
        }

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick",function() {
		stage.update();
	})
}



function init3() {
// var canvas = document.getElementById("easel"),
// 	stage = new createjs.Stage(canvas);
	
    createjs.Touch.enable(stage);
 
    var shadow1 = new createjs.Bitmap("images/3.1.jpg");
    //stage.addChild(shadow1);
    
    var container=new createjs.Container();
    container.addChild(shadow1);
    stage.addChild(container);
    var oldX;
    var oldY;
  
//         container.addEventListener("mousedown",function(e){
//             oldX= e.stageX;
//             oldY= e.stageY;
//         });
// 
//         container.addEventListener("pressmove", function (e) {
//             e.target.x+= e.stageX-oldX;
//             e.target.y+= e.stageY-oldY;
//             oldX= e.stageX;
//             oldY= e.stageY;
//         });
window.container=container

 container.addEventListener("click", function(e){
    alert("aaaa")
 });
    
    createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick",function() {
		stage.update();
	})

       
}

