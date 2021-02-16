var wall1, wall2, wall3, wall4, wall5;
function setup() {
  createCanvas(800,400);

  wall1= createSprite(200, 200, 50, 80);
  wall1.shapeColor = "green";

  wall2= createSprite(400, 200, 80, 30);
  wall2.shapeColor = "lightgreen";

  wall3 = createSprite(150,150,30,75);
  wall4 = createSprite(100,200,40,90);
  wall5 = createSprite(550,300,60,80);
}

function draw() {
  background(255,255,255);  
  wall2.x=World.mouseX;
  wall2.y=World.mouseY;
  
  if(detectCollision(wall1, wall2)){
    wall1.shapeColor = "black";
    wall2.shapeColor = "blue";
  }
  else if(detectCollision(wall2, wall3)){
    wall3.shapeColor = "purple";
    wall2.shapeColor = "pink";
  } 
  else if(detectCollision(wall2, wall4)){
    wall4.shapeColor = "orange";
    wall2.shapeColor = "yellow";
  }
  else if(detectCollision(wall2, wall5)){
    wall2.shapeColor = "lightblue";
    wall5.shapeColor = "red";
  }
  else {
    wall1.shapeColor = "green";
    wall2.shapeColor = "lightgreen";
    wall3.shapeColor = "grey";
    wall4.shapeColor = "grey";
    wall5.shapeColor = "grey";
  } 
    
  

  drawSprites();
}
