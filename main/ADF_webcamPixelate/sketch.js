/**
 * by vezzzing
 * shader x p5 project
 * p5绘图区文件,导入并绘制shader,和html对接
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
        vezzzingShader.setUniform("swidth",width);
        vezzzingShader.setUniform("sheight",height);
        vezzzingShader.setUniform("pixelSize",map(mouseX,0,width,1,30));
    }
    {/*shader画布设置*/
        rect(0,0,width,height);
    }
}
  