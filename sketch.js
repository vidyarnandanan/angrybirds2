
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boy_IMG;

function preload()
{
	boy_IMG=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);

	boy=createSprite(180,640);
   boy.addImage("person",boy_IMG)
   boy.scale=0.09;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(650,500,300,400);
	Stone = new stone(100,500)
	ground = new Ground(400,696,800,10);
	mango1 = new mango(600,450)
	mango2 = new mango(700,400)
	mango3 = new mango(650,420)
	mango4 = new mango(750,400)
	mango5 = new mango(700,460)
	mango6 = new mango(600,390)
	mango7 = new mango(650,350)
	string = new elastic(Stone.body,{x:135,y:593})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Tree.display();
  Stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  string.display();
  
  keyPressed();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
  string.fly()
}

function keyPressed() {
if (keyCode === 32){
Matter.body.setPosition(Stone.body, {x:100, y:500})
string.attach(Stone.body)
}
}
