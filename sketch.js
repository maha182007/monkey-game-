var monkey, monkeyMoving, stone, banana, jungle, stoneImage, bananaImage, jungleImage, Background, invisibleGround, stoneGroup, bananaGroup, score;
function preload() {
  monkeyMoving = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");  
  stoneImage = loadImage("stone.png");
  bananaImage = loadImage("banana.png");
  jungleImage = loadImage("jungle.jpg");

}
function setup() {
  createCanvas(800, 538);
  Background = createSprite(500,270,400,30);
  Background.addImage("jungleBackground", jungleImage);
  Background.velocityX = -1;
  bananaGroup = new Group();
  stoneGroup = new Group();

  
    monkey = createSprite(200,400,20,20);
  monkey.addAnimation("monkeyMoving", monkeyMoving);
 monkey.scale = 0.25;
  invisibleGround = createSprite(350,500,700,40);
  invisibleGround.visible = false;
  
  score = 0;

  monkey.setCollider("circle",0,0,300)
}

function draw() {
  background(220);
    monkey.velocityY = monkey.velocityY+0.6;
  monkey.collide(invisibleGround);

    if(Background.x < 300) {
    Background.x = 500;
  }
  
  if(keyDown("space") && monkey.y >350) {
    monkey.velocityY = -12 - score/10;
  }
  
  drawSprites();
 
  fill("white");
  textSize(20);
  text("Score: " + score,700,100);
  
  if(monkey.isTouching(bananaGroup)) {
   bananaGroup.destroyEach();
   score=score+2;
  }
  
  switch(score) {
    case 0:monkey.scale = 0.25;
      break;
      case 10:monkey.scale = 0.30;
      break;
    case 20: monkey.scale =0.35;
      break;
    case 30: monkey.scale = 0.40;
      break;
    case 40: monkey.scale = 0.45;
      break;
    case 50: monkey.scale = 0.50;
  }
  
  if(monkey.isTouching(stoneGroup)) {
    score = 0;
  }
  
  
  stones();
  bananas();
  
}

function stones() {
  if(frameCount % 150 === 0){
  stone = createSprite(700,430,20,20)
  stone.addImage("Stones", stoneImage);
  stone.scale = 0.3;
  stone.velocityX = -8;
  stoneGroup.add(stone);
    stone.setCollider("circle",0,0,40);
}
}

function bananas() {
  if(frameCount % 150 === 0) {
    banana = createSprite(700,200,20,20);
    banana.addImage("Bananas", bananaImage);
    banana.velocityX = -8;
    banana.scale = 0.2;
    bananaGroup.add(banana);
      banana.setCollider("rectangle",0,0,700,400);
  }
}