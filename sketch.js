


var path,boy, leftBoundary,rightBoundary,coin;
var pathImg,boyImg,coinImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

//create coins
coin = createSprite(200,200,20,20)
coin.addImage("coin",coinImg)
coin.scale = 0.3
coin.velocityY = 1

coin2= createSprite(270,1,20,20)
coin2.addImage("coin",coinImg)
coin2.scale = 0.3
coin2.velocityY = 1

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;

    coin.depth = boy.depth;
  boy.depth = boy.depth+1;

  coin2.depth = boy.depth;
  boy.depth = boy.depth+1;


  drawSprites();
}

   