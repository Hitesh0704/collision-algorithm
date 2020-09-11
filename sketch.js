var fixedRect,movingRect;

function setup() {
  createCanvas(1600,800);
  fixedRect=createSprite(1400, 200, 50, 50);
  fixedRect.shapeColor="yellow";
  
  movingRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="yellow";

  
}

function draw() {
  background("black");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor="blue";
      fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  drawSprites();
}