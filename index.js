//rgb
//x,y,w,h
var player;
function setup () {
  createCanvas(500,500);
};
function draw () {
  noStroke();
  background(0,0,0);
  //bottom right corner
  fill(255,180,180);
  rect(400,400,100,100);
  fill(45,45,45);
  ellipse(450,450,100,100);
  //top left corner
  fill(255,180,180);
  rect(0,0,100,100);
  fill(45,45,45);
  ellipse(50,50,100,100);
//top right corner
  fill(255,180,180);
  rect(400,0,100,100);
  fill(45,45,45);
  ellipse(450,50,100,100);

  //bottom left corner
    fill(255,180,180);
    rect(0,400,100,100);
    fill(45,45,45);
    ellipse(50,450,100,100);

};
// fill(0,255,0);
// ellipse(250,250,500,500);
// fill(0,0,255);
// ellipse(250,125,500,250);
// fill(255,0,0);
// ellipse(250,375,500,250);
// fill(255,255,255);
// ellipse(250,450,100,100);
// ellipse(450,250,100,100);
// ellipse(50,250,100,100);
// ellipse(250,250,100,100);
// ellipse(250,50,100,100);
// fill(0);
// ellipse(350,250,100,100);
// ellipse(150,250,100,100);
// ellipse(250,150,100,100);
// ellipse(250,350,100,100);
