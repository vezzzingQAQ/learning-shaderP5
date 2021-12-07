precision mediump float;

varying vec2 vTexCoord;

void main(){
    vec2 coord=vTexCoord;
    coord*=10.0;//10和10.0是不一样的
    coord=fract(coord);//限位在0-1
    gl_FragColor=vec4(coord.x,coord.y,0.5,1.0);
}