var shapeSize = 125;
function drawShapes () {
  background(210,55,123);
  noStroke();
  fill(0,0,255);
  rect(0,0,shapeSize,shapeSize);
  rect(0,500-shapeSize,shapeSize,shapeSize);
  rect(500-shapeSize,0,shapeSize,shapeSize);
  rect(500-shapeSize,500-shapeSize,shapeSize,shapeSize);
  fill(0,128,0);
  ellipse(shapeSize/2,shapeSize/2,shapeSize,shapeSize);
  ellipse(shapeSize/2,500-shapeSize/2,shapeSize,shapeSize);
  ellipse(500-shapeSize/2,500-shapeSize/2,shapeSize,shapeSize);
  ellipse(500-shapeSize/2,shapeSize/2,shapeSize,shapeSize);
  fill(132,132,132);
  rect(250-shapeSize,250-shapeSize,shapeSize*2,shapeSize*2)
  fill(255)
  ellipse(250,250,shapeSize*2,shapeSize*2);
};
