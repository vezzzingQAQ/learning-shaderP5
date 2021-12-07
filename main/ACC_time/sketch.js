let vezzzingShader;
function preload(){
    vezzzingShader=loadShader("vez.vert","vez.frag");
}
function setup(){
    createCanvas(max(windowWidth,windowHeight),max(windowWidth,windowHeight),WEBGL);
    noStroke();
}
function windowResized(){
    
}
function draw() {  
    shader(vezzzingShader);
    
    vezzzingShader.setUniform("time",frameCount);
    rect(0,0,width,height);
}
  