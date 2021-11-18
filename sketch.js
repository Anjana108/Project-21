
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1, wall2, wall3, wall4, wall5, ground, ball;

function setup() {
	createCanvas(800, 400);


	newEngine = Engine.create();
	world = newEngine.world;

	var crumpled = createImg("crumpled.png");
	crumpled.position(60,60);
	crumpled.size(70,50);
	crumpled.mouseClicked(force);

	function force() {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:-0.005});
	}

	var ball_options = {
		airFriction : 0,
		restitution : 0.9
	};
    
	

	
	//Create the Bodies Here.
	fill("yellow");
	wall1= new Wall(500,330,10,100);
	wall2= new Wall(650,330,10,100);
	wall3= new Wall(400,10,20,400);
	wall4= new Wall(400,10,800,200);
	wall5= new Wall(790,200,20,400);
	ground= new Wall(400,390,800,20);
	


	
	ball = Bodies.circle(120,100,20, ball_options);
	World.add(world, ball);
}


function draw() {
  rectMode(CENTER);
  background("black");
  ellipse(ball.position.x, ball.position.y, 20);
  wall1.show();
  wall2.show();
  ground.show();
  Engine.update(newEngine);
 
}



