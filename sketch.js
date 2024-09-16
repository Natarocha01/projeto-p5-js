function setup() {
    createCanvas(1000, 1000);
    background("white");
  }
  
  function draw() {
    
    stroke("blue");
    fill("black");
    if(mouseIsPressed){
    rect (mouseX, mouseY, 20, 20);
  }  
  }
    