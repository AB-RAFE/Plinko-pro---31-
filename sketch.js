const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;

var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (width/2,800,width,20);
  
  for(var k = 0;k <=width;k=k+80) {
    division.push(new Division(k,650,10,divisionHeight));
  }

  for(var j = 40;j <= width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15;j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40;j <= width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15;j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
  


}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();

  for(var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount % 60 === 0) {
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for(var k = 0; k < division.length; k++) {
    division[k].display();
  }


  drawSprites();
}