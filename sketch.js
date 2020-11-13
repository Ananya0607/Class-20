var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(100,200,50,50);
  fixedRect=createSprite(300,200,50,50);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="pink";

}

function draw() {
  background("yellow");  
  drawSprites();
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor="green";
      fixedRect.shapeColor="gray";
    }
    else{
      movingRect.shapeColor="blue";
      fixedRect.shapeColor="pink"; 
    }
    
}