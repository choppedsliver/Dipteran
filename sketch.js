let bkg, fly;
let bkgPos = -1600;
let charXPos;
let charYPos;
let speed = 1;
let star1 = 40;
// let idleSound;

function preload(){
  

  fly = loadImage('bee_fly.gif');
  bkg = loadImage('lowqualitypng.jpg');
  soundFormats('wav');
  // idleSound = loadSound('idle.wav');
  
}


function setup() {
  createCanvas(400, 400);
      charXPos = width/2;
      charYPos = height/6;

}

function draw() {
  background(220);
  //idle sound/background sound
  // idleSound.loop();
  
  image(bkg,0, bkgPos ,width,2000)
  
  // fill('white')
  // ellipse(charXPos, (height/6)*5,30,30)
  // constrain();
  image(fly,charXPos, (charYPos) * 5,30,30)
  
  
  //add limits!
  //use constrain or set other if/then limits


  if(keyIsDown(LEFT_ARROW)) {
    charXPos -= speed
  }

  if (keyIsDown(RIGHT_ARROW)) {
    charXPos += speed
  }

  if (keyIsDown(UP_ARROW)) {
      bkgPos += speed + 2
  }

  if (keyIsDown(DOWN_ARROW)) {
     bkgPos -= speed + 2
  }

  //sound sprites::
  noFill();
  
  ellipse(255, bkgPos + 1650, 40,40);
  ellipse(80, bkgPos + 1410, 40,40);
  ellipse(360, bkgPos + 1140, 40,40);
  ellipse(210, bkgPos + 950, 60,60);
  ellipse(245, bkgPos + 635, 40,40);
  
  ellipse(215, bkgPos + 470, 40,40);
  ellipse(215, bkgPos + 290, 40,40);
  ellipse(325, bkgPos + 385, 40,40);
  ellipse(85, bkgPos + 385, 40,40);
  
  console.log(charXPos, bkgPos)
  
  
  //use those values above to find the ranges for the collision detection for the specific point
  if(charXPos > 329 &&
     charXPos < 370 &&
     bkgPos > -1507 &&
     bkgPos < -1459
    ){
    console.log('colliding!')
  }

  
  ellipse(365, bkgPos + 1830,40,40);
  
 
}