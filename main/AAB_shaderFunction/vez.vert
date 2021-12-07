//.vert包含几何体位置信息?

attribute vec3 aPosition;

void main(){
    //把aPosition拷贝到四元向量
    vec4 positionVec4=vec4(aPosition,1.0);
    positionVec4.xy=positionVec4.xy*2.0-1.0;
    //将信息发送给frag
    gl_Position=positionVec4;
}