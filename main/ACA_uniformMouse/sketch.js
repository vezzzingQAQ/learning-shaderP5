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
    
    let mx=map(mouseX,0,width,0,1);
    let my=map(mouseY,0,height,0,1);

    vezzzingShader.setUniform("mouse",[mx,my]);
    rect(0,0,width, height);
}
  