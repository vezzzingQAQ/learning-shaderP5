precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D inputCam;

uniform float time;
uniform float frequency;
uniform float amplitude;

void main(){
    /*坐标转置函数->镜像回来的坐标*/
    vec2 uv=vTexCoord;
    uv=1.0-uv;
    /*函数处理部分*/
    //↓以y轴作为输入轴计算x向偏移量
    float sinWave=sin((uv.y*frequency+time)*10.0)*amplitude;
    //构造二维向量便于下一步计算
    vec2 distort=vec2(sinWave,0);
    //第一个参数代表图片纹理,第二个参数代表纹理坐标点,获取对应位置纹理的颜色RGBA值
    //相当于uv映射
    vec4 tex=texture2D(inputCam,uv+distort);
    /*像素点颜色输出*/
    gl_FragColor=tex;
}