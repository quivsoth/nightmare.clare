let bg;
let img;
var heroX = 250;
var heroY = 150;

function preload() {
    bg = loadImage('/room.png');
    clare = loadImage('/small-clare.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // loadImage('/small-clare.png', img => {
    //     image(img, 0, 0);
    // });
}

function draw() {
    background(bg);
    image(clare, heroX, heroY, 66, 100);

    if (keyIsPressed) {
        if (keyCode == RIGHT_ARROW) {
         heroX +=3; 
        }  else if (keyCode == LEFT_ARROW) {
          heroX -= 3;
        } else if (keyCode == UP_ARROW) {
          heroY -= 3; 
        } else if (keyCode == DOWN_ARROW) {
          heroY +=3; 
        }
       }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
