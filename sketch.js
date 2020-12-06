var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,board1,board2,board3;
var board1body,board2body,board3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700, 600);
	rectMode(CENTER);

	board1=createSprite(350,550,200,20);
	board1.shapeColor="red";
	board2=createSprite(250,510,20,100);
	board2.shapeColor="red";
	board3=createSprite(450,510,20,100);
	board3.shapeColor="red";

	

	
	
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	board1body=Bodies.rectangle(350,535,200,20,{isStatic:true});
	World.add(world,board1body);
	board2body=Bodies.rectangle(250,510,20,100,{isStatic:true});
	World.add(world,board2body);
	board3body=Bodies.rectangle(450,510,20,100,{isStatic:true});
	World.add(world,board3body);

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-29,width ,10);
	groundSprite.shapeColor=color(255) 


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-37, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
    
  }
}



