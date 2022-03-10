
function preload(){
  //pre-load images
  boy=loadanimation("Runner-1.png,Runner-2.png");
  path=loadimage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
 boy=createSprite(50,380,20,50);
 boy.addAnimation("Running",Runner1,Runner2);
 boy.scale = 0.5;
 //create path sprite
 path= createSprite(200,200);
path.addimage("pathimg");
path.velocityY = 4;
path.scale=1.2;

//craete invisible boundary
invisibleboundary1=createSprite(390,200,10,400);
invisibleboundary1.visible=false;
invisibleboundary2=createSprite(300,200,10,400);
invisibleboundary2.visible=false;
}

function draw() {
  background(290);
  console.log(boy.y)

  //to move the boy with keys
if(keyDown("Right_Arrow"))
{boy.velocity.X = +2;  }
 

if(keyDown("Left_Arrow"))
{ boy.velocity.X = -2}
 
if(path.y > 400){
  path.y=height/2;
}

mouse.X;
drawSprites();
}
