precision mediump float;

uniform vec2 mouse;

void main(){
    gl_FragColor=vec4(mouse.x,mouse.y,0.6,1.0);
}