var movingRect,fixedRect



function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 50, 50);
  fixedRect= createSprite(100, 200, 50, 50);
movingRect.shapeColor= "green";
fixedRect.shapeColor = "yellow";
fixedRect.velocityX= 3
movingRect.velocityX= -3

}

function draw() {
  background(255,255,255);  

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2){

fixedRect.velocityX=fixedRect.velocityX*-1;
movingRect.velocityX=movingRect.velocityX*-1;


}

if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y< movingRect.height/2+fixedRect.height/2){

  fixedRect.velocityY=fixedRect.velocityY*-1;
  movingRect.velocityY=movingRect.velocityY*-1;
  
  
  }







  drawSprites();
}