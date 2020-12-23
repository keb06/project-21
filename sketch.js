var bullet, thickness, wall, speed, weight;

function setup() {
  createCanvas(1200,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1100,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    
    
    
    if(damage > 10){

      wall.shapeColor = "green";
    }
    if(damage < 10) {
      wall.shapeColor = "pink";
    }
  }
  drawSprites();
}

function hasCollided(a,b){
  var bulletRightEdge = a.x + a.width;
  var wallLeftEdge = b.x;
  
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}