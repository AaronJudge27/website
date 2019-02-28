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

function redAndBlack () {  
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
}
