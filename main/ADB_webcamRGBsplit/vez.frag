precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D inputCam;
uniform vec2 resolution;

uniform float padding;

void main(){
    vec2 uv=vTexCoord;
    uv=1.0-uv;
    
    vec2 pixelSize=vec2(1.0)/resolution;

    vec2 offset=pixelSize*padding*50.0;

    vec4 rTex=texture2D(inputCam,uv-offset);
    vec4 gTex=texture2D(inputCam,uv);
    vec4 bTex=texture2D(inputCam,uv+offset);

    gl_FragColor=vec4(rTex.r,gTex.g,bTex.b,1.0);
}