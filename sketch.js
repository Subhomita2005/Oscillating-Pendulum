const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain;
var ball;
var log;





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var logoptions = {
    isStatic: true
  }
  log = Bodies.rectangle(200,100,200,20,logoptions);
  World.add(world,log);
  ball = Bodies.circle(220,200,40);
  World.add(world,ball);
  var chainoptions = {
    bodyA:log,
    bodyB:ball,
    stiffness:0.004,
    length:100,

  }
  chain = Constraint.create(chainoptions)
  World.add(world,chain);

  
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(log.position.x , log.position.y,200,20);
  fill("hotpink");
  ellipseMode(RADIUS);
  ellipse(ball.position.x , ball.position.y , 40);
  fill(255);
  strokeWeight(4);
  line(log.position.x,log.position.y,ball.position.x,ball.position.y);
  if(keyCode === 32){
    ball.position.x = mouseX;
    ball.position.y = mouseY;
  }
  else if(keyCode === ENTER){
    ball.position.x = 200;
  }

}