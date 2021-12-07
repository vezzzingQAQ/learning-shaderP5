precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D inputCam;
uniform float dx;

void main(){
    vec2 uv=vTexCoord;
    uv=1.0-uv;
    vec4 tex=texture2D(inputCam,uv);

    //颜色处理
    tex.r=sin(tex.r*dx)/2.0+0.5;
    tex.g=sin(tex.g*(dx+1.0))/2.0+0.5;
    tex.b=sin(tex.b*(dx+2.0))/2.0+0.5;

    gl_FragColor=tex;
}