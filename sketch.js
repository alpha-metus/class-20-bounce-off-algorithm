var fixedRect,movingRect;


function setup() {
  createCanvas(1200,1200);
  fixedRect=createSprite(500, 200, 80, 50);
  movingRect=createSprite(500, 1000, 50, 80);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green"
  fixedRect.velocityY=5;
  movingRect.velocityY=-5;
}


function draw() {
  background(0);  
//movingRect.x=World.mouseX;
//movingRect.y=World.mouseY;


if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2) {
    
fixedRect.velocityX=fixedRect.velocityX*(-1)
movingRect.velocityX=movingRect.velocityX*(-1)
  }
    if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){

      fixedRect.velocityY=fixedRect.velocityY*(-1)
      movingRect.velocityY=movingRect.velocityY*(-1)
  

}
  drawSprites();
}