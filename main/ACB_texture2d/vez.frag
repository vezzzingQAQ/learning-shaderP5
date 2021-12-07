precision mediump float;

varying vec2 vTexCoord;

//图片以sampler2D的形式传入shader
uniform sampler2D img;

void main(){
    vec2 uv=vTexCoord;
    //翻转图像
    uv.y=1.0-uv.y;
    //通过texture2d函数访问图像
    vec4 cactus=texture2D(img,uv);

    //改变颜色
    //cactus.r=1.0-cactus.r;
    cactus.g=fract(sin(cactus.g*2.0)/2.0);
    gl_FragColor=cactus;
}