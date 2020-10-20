const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
var ground;

var box1, box2;
var engine,world;
function setup() {
  var canvas= createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1=new Box(200,150,50,50);
  box2=new Box(180,50,50,50);
  ground= new Ground(400,395,800,10);


}

function draw() {
  background(255,255,255);
  Engine.update(engine); 

  box1.display();
  box2.display();
  ground.display();
  
}