function setup() {
  var canvas = createCanvas(1380, 800);
  colorMode(HSB, height, height, height);
  background(100);

  canvas.parent('sketch-holder');
}

function draw() {
  fill(65);
  stroke(mouseX, height, height);
  ellipse(mouseX, mouseY, 100, 100);
}

function mouseDragged() {
  // This function is intentionally left empty
}
