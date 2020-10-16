
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,600,20);
	dustbin=new Dustbin(600,600,10,80,options);
	dustbin2=new Dustbin(650,635,97,10,options);
	dustbin3=new Dustbin(700,600,10,80,options);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW)
	console.log("hello")
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
	

