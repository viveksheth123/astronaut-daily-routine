var bg
var bgImg 
var astronaut
var astronautImg,astronaut_sleep,sleeping
var astronaut_brush,brushing
var astronaut_bath,bathing
var astronaut_eat,eating
var astronaut_drink,drinking
var astronaut_gym,gyming
var astronaut_move,moving


function preload(){
  bgImg= loadImage("iss.png")
  astronaut_sleep=loadImage("sleep.png")
  astronaut_brush=loadImage("brush.png")
  astronaut_bath=loadAnimation("bath1.png","bath2.png")
  astronaut_eat=loadAnimation("eat1.png","eat2.png")
  astronaut_drink=loadAnimation("drink1.png","drink2.png")
  astronaut_gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  astronaut_move=loadAnimation("move.png","move1.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(600,300,10,10)
  bg.addImage(bgImg)
  bg.scale=0.3

  astronaut=createSprite(600,530,10,10)
  astronaut.addImage("sleeping",astronaut_sleep)
  astronaut.addImage("brushing",astronaut_brush)
  astronaut.addAnimation("bathing",astronaut_bath)
  astronaut.addAnimation("eating",astronaut_eat)
  astronaut.addAnimation("drinking",astronaut_drink)
  astronaut.addAnimation("gyming",astronaut_gym)
  astronaut.addAnimation("moving",astronaut_move)
  astronaut.scale=0.1

  
 

}
function draw() {
  background(255,255,255);

  
  if(keyDown("UP_ARROW")){
    astronaut.changeImage("brushing",astronaut_brush)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.changeAnimation("bathing",astronaut_bath)
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.changeAnimation("eating",astronaut_eat)
  }

  if(keyDown("space")){
    astronaut.changeAnimation("drinking",astronaut_drink)
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.changeAnimation("gyming",astronaut_gym)
  }

  

  
  


  drawSprites();
}