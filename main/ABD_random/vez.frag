precision mediump float;

varying vec2 vTextCoord;//golbal233

float rand1(vec2 co){
    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);
}
float rand2(vec2 co){
    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*53758.5453);
}
float rand3(vec2 co){
    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*63758.5453);
}

void main(){
    vec2 coord=vTextCoord;

    float random1=rand1(coord);
    float random2=rand2(coord);
    float random3=rand3(coord);

    gl_FragColor=vec4(random1,random2,random3,1.0);
}