var ball2, ball1, ball3, ball4, ball5, ball6;

function setup() {
  createCanvas(800,400);
  ball1 = createSprite(200,200,50,50);
  ball1.shapeColor = "green";
  ball2 = createSprite(600,200,50,50);
  ball2.shapeColor = "green";
  ball3 = createSprite(200,100,50,50);
  ball3.shapeColor = "pink";
  ball4 = createSprite(600,100,50,50);
  ball4.shapeColor = "blue";
  ball5 = createSprite(200,300,50,50);
  ball5.shapeColor = "red";
  ball6 = createSprite(600,300,50,50);
  ball6.shapeColor = "red";

  ball1.velocityX = 2;
  ball1.velocityY = 2;
  ball2.velocityX = -2;
  ball2.velocityY = 2;
  ball3.velocityX = 2;
  ball3.velocityY = -2;
  ball4.velocityX = -2;
  ball4.velocityY = -2;
}

function draw() {
  background(255,255,255); 
   ball6.x = World.mouseX;
   ball6.y = World.mouseY; 
  
  bouncing(ball1,ball2);
  bouncing(ball1,ball3);
  bouncing(ball1,ball4);
  bouncing(ball2, ball3);
  bouncing(ball2, ball4);
  bouncing(ball3,ball4);

  if(touching(ball5,ball6)){
    ball5.shapeColor = "black";
    ball6.shapeColor = "black";
  } else{
    ball5.shapeColor = "red";
    ball6.shapeColor = "red";
  }
  drawSprites();
}

