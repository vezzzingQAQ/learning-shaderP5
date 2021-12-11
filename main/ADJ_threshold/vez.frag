/**
 * by vezzzing
 * shader x p5 project
 * 像素点着色文件,计算每一个像素的颜色
 */
precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D inputCam;

uniform float mouseX;

float luma(vec3 color){//色彩转换
    return(dot(color,vec3(0.299,0.587,0.114)));
}
void main(){
    /*坐标转置函数->镜像回来的坐标*/
    vec2 uv=vTexCoord;
    uv=1.0-uv;

    /*函数处理部分*/
    vec4 tex=texture2D(inputCam,uv);

    float gray=luma(tex.rgb);
    float thresh=step(mouseX,gray);//<mouseX->blakc,>mouseX->black
    /*像素点颜色输出*/
    gl_FragColor=vec4(thresh,thresh,thresh,1.0);
}