//指定精度
precision mediump float;

//函数比较C风格
vec4 addVec4(vec4 a,vec4 b){
    vec4 sum;
    sum=a+b;
    return sum;
}

void main(){
    //rgba
    vec4 mainColor1=vec4(0.0,0.3,0.1,1.0);
    vec4 mainColor2=vec4(0.0,0.1,0.4,1.0);
    vec4 color=addVec4(mainColor1,mainColor2);
    gl_FragColor=color;
}