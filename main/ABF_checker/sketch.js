let vezzzingShader;
function preload(){
    vezzzingShader=loadShader("vez.vert","vez.frag");
}
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {  
    shader(vezzzingShader);
    vezzzingShader.setUniform("resolution",[width,height]);
    rect(0,0,width, height);
}
  