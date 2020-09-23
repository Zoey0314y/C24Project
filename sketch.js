
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;


function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";

	dustbinposition = width/2 - 100;
	dustbinY = 650;

	leftSprite=createSprite(boxposition,boxY,20,100);
	leftSprite.shapeColor = "white";
	leftbody = Bodies.rectangle(boxposition + 20,boxY,20,100,{isStatic : true});
	World.add(world,leftbody);
	
	rightSprite=createSprite(boxposition + 200,boxY,20,100);
	rightSprite.shapeColor = "white";
	rightbody = Bodies.rectangle(boxposition + 200 - 20,boxY,20,100,{isStatic : true});
	World.add(world,rightbody);
	
	bottomSprite=createSprite(boxposition + 100,boxY + 40,200,20);
	bottomSprite.shapeColor = "white";
	bottombody = Bodies.rectangle(boxposition + 100,boxY + 45 - 20,200,20,{isStatic : true});
	World.add(world,bottombody);

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic : true} );
	World.add(world, ground);

	paper = new Paper(50,50,5);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}

}
