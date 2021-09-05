var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var gameState = "play";

var divisionHeight=300;
var score =0;

var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",20,700);
 text("500",100,700);
 text("500",180,700);
 text("500",260,700);
 text("100",340,700);
 text("100",420,700);
 text("100",500,700);
 text("200",580,700);
 text("200",660,700);
 text("200",740,700);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null && gameState == "play"){
   particle.display()

   if(particle.body.position.y>760){
     if (particle.body.position.x<300){
        score = score+500
        particle = null;
     }
     else if (particle.body.position.x>301 && particle.body.position.x<600){
      score = score+100
      particle = null;
   }
   else if (particle.body.position.x>601 && particle.body.position.x<900){
    score = score+200
    particle = null;
 }
   }
   }

   if(turn>= 5){
     gameState = "end"
   }

   if(gameState == "end"){
     text("Game Over",400,400)
   }
}

function mousePressed(){
  if(gameState !== "end"){
    particle = new Particle(mouseX,10,10,10)
    turn = turn+1;
  }
}