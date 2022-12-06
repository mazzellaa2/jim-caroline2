var x, y, s1, s2;

function setup() {
  createCanvas(1920,1200);
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  s1 = width;
  s2= height;

}

function draw() {
  background(233, 116, 81, 20);

  frameRate(13);
  fill(54, 186, 180, 70);
  noStroke();
  rect(x, y, s1, s2);

  s1 = s1 - 5;
  s2 = s2 - 5;

  if (s2 < 0) {
    s1 = width;
    s2=height;
  }

//   if(s2<540){
//   s2=height;
//   }

  
}
11, 72, 94
