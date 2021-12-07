attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTextCoord;//可变化的值【vary可变的】
void main(){
    vTextCoord=aTexCoord;
    vec4 positionVec4=vec4(aPosition,1.0);
    positionVec4.xy=positionVec4.xy*2.0-1.0;
    //将信息发送给frag
    gl_Position=positionVec4;
}