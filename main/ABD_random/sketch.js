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
    rect(0,0,width, height);
}
  