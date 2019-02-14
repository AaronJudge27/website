//rgb
//x,y,w,h
var shapeSize = 132;
var ulx = 0;
var uly = 0;
var urx = 450;
var ury = 0;
var llx = 0;
var lly = 450;
var lrx = 450;
var lry = 450;
var mlx = 0;
var mly = 225;
var lcx = 225;
var lcy = 450;
var ucx = 225;
var ucy = 0;
var mrx = 450;
var mry = 225;
var s = 0.5;

function setup () {
  createCanvas(500,500);
};
function draw () {
  background(0);
  noStroke();
  fill(255,0,0);
  rect(0,0,500,500);
  rect(75,75,350,350);
  fill(0);
  rect(50,50,400,400);
  fill(255,0,0);
  rect(125,125,250,250);
  fill(0);
  rect(175,175,150,150);
  line(0,0,500,500);
  line(0,500,500,0);
  line(0,250,500,250);
  line(250,0,250,500);
  fill(255,0,0);
  rect(ulx,uly,50,50);
  rect(urx,ury,50,50);
  rect(llx,lly,50,50);
  rect(lrx,lry,50,50);
  rect(mlx,mly,50,50);
  rect(lcx,lcy,50,50);
  rect(ucx,ucy,50,50);
  rect(mrx,mry,50,50);


  ulx+=s;
  uly+=s;
  ury+=s;
  urx-=s;
  llx+=s;
  lly-=s;
  lrx-=s;
  lry-=s;
  mlx+=s;
  lcy-=s;
  ucy+=s;
  mrx-=s;

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
