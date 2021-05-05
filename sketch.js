var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // loading sound
    music = loadSound("music.mp3");
}


function setup(){
    //creating the canvas
    canvas = createCanvas(800,600);

    //create 4 colored blocks
    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "yellow";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "orange";
    
    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "green";

    
    //creating teh ball with x & y velocity
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 8;
    ball.velocityY = 7;

    music.loop();

}

function draw() {
    background(rgb(169,169,169));

    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    //ball changes color and bounces off on touching block1
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = block1.shapeColor;
     }

    //ball changes color and stops on touching block2
    if(block2.isTouching(ball)){
        ball.shapeColor = block2.shapeColor;
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    //ball changes color and bounces off on touching block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
      ball.shapeColor = block3.shapeColor;
    }

    //ball changes color and bounces off on touching block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = block4.shapeColor;
     }

    drawSprites();
}
