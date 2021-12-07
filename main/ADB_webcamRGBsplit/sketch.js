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
    let padding=map(mouseX,0,width,0,1)
    vezzzingShader.setUniform("inputCam",cam);
    vezzzingShader.setUniform("resolution",[width,height]);
    vezzzingShader.setUniform("padding",padding);
    rect(0,0,width,height);
}
  