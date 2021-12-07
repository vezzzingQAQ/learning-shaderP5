precision mediump float;

varying vec2 vTextCoord;//golbal233

void main(){
    //vTextCoord随着位置变化->(0-1);
    gl_FragColor=vec4(vTextCoord.x,vTextCoord.y,0.5,1.0);
}