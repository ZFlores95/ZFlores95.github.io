function setup() {
    createCanvas(900, 900);
    colorMode(HSB, height, height, height);
    background(600);
  }
  
  function draw() {
    fill(mouseX,5,height)
    stroke(158,40,218)
    rectMode(CENTER)
    rect(mouseX,mouseY,70,82,14)
  }
  
  function mouseDragged() {
    // This function is intentionally left empty
  }
  