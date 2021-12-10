/**
 * by vezzzing
 * shader x p5 project
 * 像素点着色文件,计算每一个像素的颜色
 */
precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D inputCam;

uniform vec2 texelSize;

void main(){
    /*坐标转置函数->镜像回来的坐标*/
    vec2 uv=vTexCoord;
    uv=1.0-uv;

    /*函数处理部分*/
    //读取像素邻居的值求平均值来模糊
    float spread=4.0;

    vec2 offset=texelSize*spread;

    //获取邻居像素
    vec4 tex=texture2D(inputCam,uv);

    tex+=texture2D(inputCam,uv+vec2(-offset.x,-offset.y));//tl
    tex+=texture2D(inputCam,uv+vec2(0.0,-offset.y));//tm
    tex+=texture2D(inputCam,uv+vec2(offset.x,-offset.y));//tr

    tex+=texture2D(inputCam,uv+vec2(-offset.x,0.0));//ml
    tex+=texture2D(inputCam,uv+vec2(offset.x,0.0));//mr

    tex+=texture2D(inputCam,uv+vec2(-offset.x,offset.y));//bl
    tex+=texture2D(inputCam,uv+vec2(0.0,offset.y));//bm
    tex+=texture2D(inputCam,uv+vec2(offset.x,offset.y));//br

    tex/=9.0;
    /*像素点颜色输出*/
    gl_FragColor=tex;
}