let ground;
let rocketPlayer,space;
var rocketPlayer_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  rocketPlayer_img = loadImage("rocketPlayer.png");
  bg_img = loadImage("space.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);
  space = createSprite(windowWidth/2,windowHeight/2)
  space.addImage(bg_img)
  space.velocityY = 4
  rocketPlayer = createSprite(windowWidth/4,windowHeight-150,30,30);
  rocketPlayer.addImage(rocketPlayer_img);
  rocketPlayer.scale = 0.5;
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  //space.velocityY = 4
  if (space.y>2000){
    space.y = 100
  }
  if (keyDown(UP_ARROW)&&rocketPlayer.position.y>0){
    rocketPlayer.position.y-=10
  }
  if (keyDown(RIGHT_ARROW)&&(rocketPlayer.position.x>0&&rocketPlayer.position.x<windowWidth)){
    rocketPlayer.position.x+=10
  }
  if (keyDown(LEFT_ARROW)&&(rocketPlayer.position.x>0&&rocketPlayer.position.x<windowWidth)){
    rocketPlayer.position.x-=10
  }
  //fall down
  //vy +=g;
  //rocketPlayer.position.y+=vy;
  drawSprites();
}


