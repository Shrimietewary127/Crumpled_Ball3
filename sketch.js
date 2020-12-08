
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var paper,dustbin1,container,ground;
var launcher;
function preload()
{
	//paper=loadImage("paperImg.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(80,140);
container= new Container(480,380,90,30);
ground = new Ground(250,400,800,10)
dustbin1=new Dustbin(240,160,150,150);

launcher=new Launcher(paper.body,{x:100,y:200});
	Engine.run(engine);
  
}


function draw() {
  
  background('white');
  Engine.update(engine);

  
  container.display();
  dustbin1.display();
  paper.display();
 
  launcher.display();

  ground.display();
 
}

/*function keyPressed(){
	if (keyCode===UP_ARROW){
		console.log("paper")

	Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})

}
}*/

function mouseDragged(){
	Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
	launcher.fly();
  }



