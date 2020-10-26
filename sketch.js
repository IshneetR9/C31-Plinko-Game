const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var division = [];
var plinko1 = [], plinko2 = [], plinko3 = [], plinko4 = [];
var particle = [];


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //creating divisions
  for(var i=0; i<=480; i=i+80)
  {
    division.push (new Division(i, 610, 10, 380));
  }

  //plinko first line
  for(var j =40; j<=width; j=j+50)
  {
    plinko1.push(new Plinko(j, 50));
  }

  //plinko second line
  for(var j = 15; j<=width-10; j=j+50)
  {
    plinko2.push(new Plinko(j, 150));
  }

  //plinko third line
  for(var j =40; j<=width; j=j+50)
  {
    plinko3.push(new Plinko(j, 250));
  }

  //plinko fourth line
  for(var j = 15; j<=width-10; j=j+50)
  {
    plinko4.push(new Plinko(j, 350));
  }

  //creating ground
  ground = new Ground(240, 790, 480, 20);
}

function draw() {
  background(0);  

  Engine.update(engine);

   //creating particles after every 60 frames
   if(frameCount%60 === 0)
   {
     particle.push(new Particle(random(100, 380),random(0, 10)));
   }

  //displaying divisions
  for(var x=0; x<division.length; x=x+1)
  {
    division[x].display();
  }

  //displaying plinko1
  for(var y=0; y<plinko1.length; y++)
  {
    plinko1[y].display();
  }

  //displaying plinko2
  for(var y=0; y<plinko2.length; y++)
  {
    plinko2[y].display();
  }

  //displaying plinko3
  for(var y=0; y<plinko3.length; y++)
  {
    plinko3[y].display();
  }

  //displaying plinko4
  for(var y=0; y<plinko4.length; y++)
  {
    plinko4[y].display();
  }

  //displaying particles
  for (var z=0; z<particle.length; z++)
  {
    particle[z].display();
  }

  //displaying ground
  ground.display();

  drawSprites();
}