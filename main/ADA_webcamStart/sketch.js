let vezzzingShader;

let cam;

function preload(){
    vezzzingShader=loadShader("vez.vert","vez.frag");
}
function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL);
    noStroke();

    cam = createCapture(VIDEO);
    cam.size(windowWidth, windowHeight);
    cam.hide();
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
function draw() {  
    shader(vezzzingShader);
    
    vezzzingShader.setUniform("inputCam",cam);
    vezzzingShader.setUniform("dx",map(mouseY,0,height,0,100));

    rect(0,0,width,height);
}
  