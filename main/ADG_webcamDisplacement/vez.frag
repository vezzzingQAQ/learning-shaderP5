/**
 * by vezzzing
 * shader x p5 project
 * 像素点着色文件,计算每一个像素的颜色
 */
precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D inputCam;
uniform sampler2D inputImg;

uniform float amt;

void main(){
    /*坐标转置函数->镜像回来的坐标*/
    vec2 uv=vTexCoord;
    uv=1.0-uv;

    /*函数处理部分*/
    vec4 cam=texture2D(inputCam,uv);
    float avg=dot(cam.rgb,vec3(0.333333));
    avg=avg*2.0-1.0;
    float disp=avg*amt;
    vec4 outputTex=texture2D(inputImg,uv+disp);
    /*像素点颜色输出*/
    gl_FragColor=outputTex;
}