/**
 * by vezzzing
 * shader x p5 project
 * p5绘图区文件,导入并绘制shader,和html对接
 */
let vezzzingShader;
let cam;
function preload()
{/*全局shader导入*/
    blurH=loadShader("vez.vert","vez.frag");
    blurV=loadShader("vez.vert","vez.frag");
}
function setup(){
    {/*画布建立*/
        pass1=createCanvas(windowWidth,windowHeight,WEBGL);
        pass2=createCanvas(windowWidth,windowHeight,WEBGL);
    }
    {/*世界全局设置*/
        pass1.noStroke();
        pass2.noStroke();
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
        pass1.shader(blurH);
        blurH.setUniform("inputCam",cam);
        blurH.setUniform("texelSize",[1.0/width,1.0/height]);
        blurH.setUniform("direction",[1.0,0.0]);
        
        pass2.shader(blurV);
        blurV.setUniform("inputCam",cam);
        blurV.setUniform("texelSize",[1.0/width,1.0/height]);
        blurV.setUniform("direction",[0.0,1.0]);
    }
    {/*shader画布设置*/
        pass1.rect(0,0,width,height);
        pass2.rect(0,0,width,height);
        image(pass2,0,0,width,height);
    }
}
  