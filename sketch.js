
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1
var b2
var b3
var b4
var b5
var g1
var r1
var r2
var r3
var r4
var r5

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
   
	Engine.run(engine);
  b1= new Bob(200,500,40)
  b2= new Bob(240,500,40)
  b3= new Bob(280,500,40)
  b4= new Bob(320,500,40)
  b5= new Bob(360,500,40)
  g1= new Ground(280,295,200,30)
  r1= new Rope(b1.body,g1.body,-40*2,0)
  r2= new Rope(b2.body,g1.body,-3*14,0)
  r3= new Rope(b3.body,g1.body,-3*1,0)
  r4= new Rope(b4.body,g1.body,-3*-13,0)
  r5= new Rope(b5.body,g1.body,-3*-25,0)

}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  drawSprites();
  g1.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
}

function keyPressed(){
  if (keyCode===LEFT_ARROW){
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-80,y:-80});
  }
}



