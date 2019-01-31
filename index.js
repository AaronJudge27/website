//rgb
//x,y,w,h
var shapeSize = 132;
var x1 = 0;
var y1 = 0;
var x2 = 450;
var y2 = 0;
var x3 = 0;
var y3 = 450;
var x4 = 450;
var y4 = 450;
var s = 0.5;

function setup () {
  createCanvas(500,500);
};
function draw () {
  background(230);
  fill(0);
  line(0,0,500,500);
  line(0,500,500,0);
  fill(255,0,0);
  rect(x1,y1,50,50);
  rect(x2,y2,50,50);
  rect(x3,y3,50,50);
  rect(x4,y4,50,50);
  x1+=s;
  y1+=s;
  y2+=s;
  x2-=s;
  x3+=s;
  y3-=s;
  x4-=s;
  y4-=s;

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

//Smiley Face
// fill(255,255,0);
// ellipse(250,250,500,500);
// fill(0,0,0);
// ellipse(250,325,350,215);
// ellipse(175,125,50,115);
// ellipse(325,125,50,115);
// fill(255,255,0);
// ellipse(250,300,365,190);
// fill(0,0,0);
// triangle(250,213,185,325,315,325);
// fill(255,255,0);
// triangle(265,200,203,317,325,317);

// background(210,55,123);
// fill(0,0,255);
// rect(0,0,shapeSize,shapeSize);
// rect(0,500-shapeSize,shapeSize,shapeSize);
// rect(500-shapeSize,0,shapeSize,shapeSize);
// rect(500-shapeSize,500-shapeSize,shapeSize,shapeSize);
// fill(0,128,0);
// ellipse(shapeSize/2,shapeSize/2,shapeSize,shapeSize);
// ellipse(shapeSize/2,500-shapeSize/2,shapeSize,shapeSize);
// ellipse(500-shapeSize/2,500-shapeSize/2,shapeSize,shapeSize);
// ellipse(500-shapeSize/2,shapeSize/2,shapeSize,shapeSize);
// fill(132,132,132);
// rect(250-shapeSize,250-shapeSize,shapeSize*2,shapeSize*2)
// fill(255)
// ellipse(250,250,shapeSize*2,shapeSize*2);
