var bullet;
var wall;
var speed,weight;

function setup() {
  speed=random(123,221);
  weight=random(30,52);
  thickness=random(22,83);

  createCanvas(1800,400);
  bullet=createSprite(40, 200, 50, 10);
  bullet.shapeColor="black";
  bullet.velocityX=speed;

  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor="grey";

  

}

function draw() {
  background(255,255,255);

  if (wall.x-bullet.x  < bullet.width/2+wall.width/2){
    bullet.velocityX=0;

    var deformation= 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(deformation<10){
     wall.shapeColor="green";


    }
    
    if (deformation>10){
      wall.shapeColor="red";
    }
    
    
  }
  
 

  


  drawSprites();
}