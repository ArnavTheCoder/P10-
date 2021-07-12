var sea,seaImg;
var ship,ship_running;


function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg = loadImage("sea.png");
}

function setup(){
createCanvas(400,400);
background("blue")

sea = createSprite(400,200)
sea.addImage("sea",seaImg)
sea.velocityX = -2
sea.x = sea.width/8
sea.scale = 0.3

ship = createSprite(130,180,10,40);
ship.addAnimation("running",ship_running)
ship.scale = 0.20
  
}

function draw() {
sea.velocityX = -3

if(sea.x < 0 ){
   sea.x = sea.width/8
  }

  drawSprites();
 
}