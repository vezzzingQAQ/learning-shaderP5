precision mediump float;

varying vec2 vTexCoord;

uniform float time;

vec4 calColor(vec2 point,float t){
    float z=sin(sqrt(point.x*point.x+cos(point.y-t+sin(point.x+t/3.0))+point.y*point.y+sin(point.x+point.y+t*3.0))-t);
    float r=sin(z*255.0)/2.0;
    float g=sin(z*256.0)/2.0;
    float b=sin(z*257.0)/2.0;
    return vec4(r,g,b,1.0);
}

void main(){
    vec2 spoint=vTexCoord;

    float speed=0.001;

    gl_FragColor=calColor(spoint,time*speed);
}