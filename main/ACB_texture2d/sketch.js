let vezzzingShader;
function preload(){
    vezzzingShader=loadShader("vez.vert","vez.frag");
    currentImg=loadImage("bc.JPG");
}
function setup(){
    createCanvas(currentImg.width, currentImg.height, WEBGL);
    noStroke();
}
function windowResized(){
    
}
function draw() {  
    shader(vezzzingShader);
    
    vezzzingShader.setUniform("img",currentImg);
    rect(0,0,width, height);
}
  