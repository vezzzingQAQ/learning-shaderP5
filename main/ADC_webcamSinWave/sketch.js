/**
 * by vezzzing
 * 2021.11.12
 * shader x p5 project
 */
 let vezzzingShader;
 let cam;
 function preload()
 {/*全局shader导入*/
     vezzzingShader=loadShader("vez.vert","vez.frag");
 }
 function setup(){
     {/*画布建立*/
         createCanvas(windowWidth,windowHeight,WEBGL);
     }
     {/*世界全局设置*/
         noStroke();
     }
     {/*摄像机建立*/
         cam = createCapture(VIDEO);
         cam.size(windowWidth, windowHeight);
         cam.hide();
     }
 }
 function windowResized()
 {/*画布缩放*/
     resizeCanvas(windowWidth,windowHeight);
 }
 function draw(){
     {/*shader设置*/  
        shader(vezzzingShader);
        vezzzingShader.setUniform("inputCam",cam);
        vezzzingShader.setUniform('time', frameCount * 0.01);
        let freq = map(mouseX, 0, width, 0, 10.0);
        let amp = map(mouseY, 0, height, 0, 0.25);
        vezzzingShader.setUniform('frequency', freq);
        vezzzingShader.setUniform('amplitude', amp);
    }
    {/*shader画布设置*/
        rect(0,0,width,height);
    }
 }
 