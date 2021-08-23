var iss;
var spacebg;
var spacecraft1;
var spacecraft2;
var spacecraft3;
var spacecraft4;

var hasDocked = false;

function preload(){
  iss = loadImage("./assets/iss.png");
  spacebg = loadImage("./assets/spacebg.png");
  spacecraft = loadImage("spacecraft1.png");
  spacecraft = loadImage("spacecraft2.png");
  spacecraft = loadImage("spacecraft3.png");
  spacecraft = loadImage("spacecraft4.png");

  spacecraft.playing = true;
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  iss = createSprite(600,200);
  iss.addImage("iss");
  iss.scale = 0.2;

  spacecraft = createSprite(200,200);
  spacecraft.addAnimation("spacecraftAnimation", spacecraft1, spacecraft2,spacecraft3 ,spacecraft4);
  spacecraft.scale = 0.2;

}

function draw() {
  background(spacebg);  
  
  if(keyDown("UP_ARROW")){
    spacecraft.changeAnimation(spacecraft2);
    spacecraft.velocityY= 2;
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.changeAnimation(spacecraft1);

  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.changeAnimation(spacecraft3);
    spacecraft.velocityX= 2;
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.changeAnimation(spacecraft4);
    spacecraft.velocityX= 2;
  }
  drawSprites();
}