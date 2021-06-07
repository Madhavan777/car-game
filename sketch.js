var  END = 0;
var car,carimage;
var edges,invisible1,invisible2;
var road,car1,carimage1;
var carGroup,rand;
var pathImg,path;
var gameoverimg,gameover;
var distance = 0;
var gameState = "PLAY";



function preload(){
  carimage = loadImage("—Pngtree—cool sports car_5614767.png");
 carimage1 = loadImage("—Pngtree—luxury white super sports car_5574998.png"
);
 pathImg = loadImage("—Pngtree—black winding road road city_55464672.png"
);
  gameoverimg = loadImage("—Pngtree—game over text effect speech_62898793.png");
}

function setup() {
  createCanvas(600,300);
   // game over image
  gameover = createSprite(300,100);
  gameover.addImage(gameoverimg);
  
  
  //Moving background
  path=createSprite(100,130);
  path.addImage(pathImg);
  path.velocityX = -5;
  
  //creating car
  car = createSprite(150,150);
  car.addImage(carimage);
  car.scale = 0.05;
   car.debug = true
  
  //set collider for car
car.setCollider("rectangle",0,0,40,40);
  
  invisible1 = createSprite(200,1,400,5);      
  invisible1.visible = false;
  invisible2 = createSprite(200,299,400,5);
  invisible2.visible = false;
  
   carGroup = new Group();
}

function draw() {
  background("red");
  
  text("Game Over",260,150);
  textSize(10);
  
  
    if(gameState === "PLAY"){
      
  
    
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
  
  edges= createEdgeSprites();
   car .collide(edges);
    
     //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  
  if(keyDown(UP_ARROW)){
    car.velocityY = -3;
  }
   if(keyDown(DOWN_ARROW)){
    car.velocityY = 3;
    
  }
    
   if(car.isTouching(carGroup)){
    car.velocityY = 0;
  } 
  
  if(carGroup.isTouching(car)||car.y>600){
    car.destroy();
    gameState = "END";
  }
  if(gameState === "END"){
  car.collide(invisible1);
  car.collide(invisible2);
  gameover.addImage(gameoverimg);
 gameover.visible = true;

  }
 spawncars();
  
  drawSprites();

}
function spawncars(){
   
 if (frameCount % 60 === 0){
   car1 = createSprite(600,Math.round(random(50, 250)));
   //assign scale and lifetime to the obstacle           
   car1.scale = 0.02;
   car1.velocityX = -(6 + 2*distance/150);
   car1.addImage(carimage1);
   car1.setLifetime=300;
        
   //add each obstacle to the group
   carGroup.add(car1);
 }
}
}