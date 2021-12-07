precision mediump float;

varying vec2 vTexCoord;

uniform vec2 resolution;

void main(){
    vec2 coord=vTexCoord;

    coord.x*=resolution.x/resolution.y;

    float tiles=300.0;//几个格子

    float col=floor(coord.x*tiles)+floor(coord.y*tiles);

    col=mod(col,2.0);

    gl_FragColor=vec4(col,col,col,1.0);
}