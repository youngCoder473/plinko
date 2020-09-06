const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;
var x
var particles;
var plinko = [];
var divisions = [];
var divisionHeight = 300
var score = 0;
var turn = 0;
var gameState

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = Bodies.rectangle(0,780,20000,10,{isStatic:true,restitution:0.2});
  World.add(world,ground);

  gameState = "play"
  wall = new Wall(120,730);
  wallTwo = new Wall(240,730);
  wallThree = new Wall(360,730);
  wallFour = new Wall(0,730);
  wallFive = new Wall(470,730);

  marker = new Marker(120,780);
  markerTwo = new Marker(240,780);
  markerThree = new Marker(360,780);
  markerFour = new Marker(480,780);

  
  for(var i=40; i<=width;i=i+50){
    plinko.push(new Plink(i,75))

    plinko.push(new Plink(i,150))

    plinko.push(new Plink(i,225))

    plinko.push(new Plink(i,300))

    plinko.push(new Plink(i,375))

    plinko.push(new Plink(i,450))

    plinko.push(new Plink(i,525))

    plinko.push(new Plink(i,600))

  }


  //createSprite(400, 200, 50, 50);
}

function draw() {

  background("green");
  Engine.update(engine);
  
  fill("white");
  rect(0,780,800,10);
  
  wall.display();
  wallTwo.display();
  wallThree.display();
  wallFour.display();
  wallFive.display();

  text("score ="+score,200,100);
 // marker.display();
  //markerTwo.display();
  //markerThree.display();
  //markerFour.display();
  if(particles!=null){
    particles.display();
    if(particles.body.position.y >760){
      if(particles.body.position.x<120){
        score+=500;
        particles = null;
      }
      else if(particles.body.position.x>120&&particles.body.position.x<240){
        score+=100;
        particles = null;
      }
      else if(particles.body.position.x>240&&particles.body.position.x<360){
      score+=100;
      particles = null;
    }
    else if(particles.body.position.x>360){
      score+=100;
      particles = null;
    }
  }

}

  for(var z=0;z<plinko.length;z++){
    plinko[z].display();
  }

  if(turn == 5){
    gameState = "over"
  }

  text("500",50,750);
  text("100",170,750);
  text("100",290,750);
  text("500",400,750);

  if(gameState == "over"){
    text("GameOver",200,200)
  }
  console.log(turn)

  drawSprites();
}

function mouseReleased(){
  if(gameState!="over"){
    turn++ 
    console.log("hi")
    particles = new Particle(mouseX,10,10,10);
  }
}