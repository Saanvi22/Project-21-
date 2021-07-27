
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball; 
var groundObj; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


	var op = {
		isStatic:false, 
		restitution:0.3,
		friction:0,
		density:1.2,
	}; 

	//Create the Bodies Here.

	groundObj = new ground (width/2,670,width,20); 

	ball = Bodies.circle (200,100,10,op); 
  World.add (world,ball); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,10);


groundObj.display(); 

  drawSprites();
 
}



