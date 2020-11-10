
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground;
var survivalTime=0;
var invisibleGround;

function preload(){ 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
}

function setup() {
  createCanvas(500,500);
  monkey=createSprite(50,300,0,0);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.10;
  
  ground=createSprite(400,350,997,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  invisibleGround=createSprite(400,360,900,10);
  invisibleGround.velocityX=-4;
  invisibleGround.x=invisibleGround.width/2;
  invisibleGround.visible=false;
  
  
}

function draw() {
  background("white");
  banana();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score"+score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil (frameCount/frameRate()) 
  text("SURVIVAL TIME: "+ survivalTime, 100,50);
  
  obstacles();
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  
  
  if (keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;

  
  
  monkey.collide(ground);
  
  
drawSprites();
  
}

function obstacles(){
  if (World.frameCount%300===0){
    var obstacle=createSprite(500,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.10
    obstacle.velocityX=-2;
  }
}
  function banana(){
    if (World.frameCount%80===0){
      var banana=createSprite(500,200,0,0);
      banana.addImage(bananaImage);
      banana.scale=0.1;
            banana.velocityX=-3;

      banana=Math.round(random(400,550));
      
      banana.depth=monkey.depth;
      monkey.depth=banana.depth+1;
    }
  
}
