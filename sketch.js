const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(400, 390, 800, 10)

  stand = new Ground(400, 300, 400, 10)

  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);
  //level three
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  //top
  block16 = new Block(390, 155, 30, 40)
  options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}
  polygon = Bodies.circle(50, 200, 20,options)
  World.add(world, polygon)

  slingShot = new SlingShot(polygon, { x: 100, y: 100 })


}

function draw() {
  background(255, 255, 255);
  ground1.display()
  stand.display()
  slingShot.display()

  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()


}

function mouseDragged() {

  Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });


}
function mouseReleased() {
  slingShot.fly();

}


