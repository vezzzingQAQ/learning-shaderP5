precision mediump float;

varying vec2 vTextCoord;//golbal233

void main(){
    vec2 coord=vTextCoord;

    vec3 color1=vec3(0.2,0.9,0.9);
    vec3 color2=vec3(0.9,0.3,0.5);

    float mask=coord.x;

    vec3 gradient=mix(color1,color2,mask);

    gl_FragColor=vec4(gradient,1.0);
}