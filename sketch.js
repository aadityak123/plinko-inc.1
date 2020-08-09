const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;



var ground1;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  var ground1 = new Ground(440,795,440,10);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  ground1.display();

}
