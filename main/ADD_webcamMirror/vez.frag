/**
 * by vezzzing
 * shader x p5 project
 * 像素点着色文件,计算每一个像素的颜色
 */
precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D inputCam;

void main(){
    /*坐标转置函数->镜像回来的坐标*/
    vec2 uv=vTexCoord;
    uv=1.0-uv;
    /*函数处理部分*/
    vec2 mirroruv=abs(uv*2.0-1.0);
    vec4 outputTex=texture2D(inputCam,mirroruv);
    /*像素点颜色输出*/
    gl_FragColor=outputTex;
}