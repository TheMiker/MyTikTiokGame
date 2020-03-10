var position_x = 950;
var position_y = 250;

function preload() {
  bob = loadImage('bob.png');
  front = loadImage('bob.png');
  back = loadImage('bob_back.png');
  left = loadImage('bob_left.png');
  right = loadImage('bob_right.png');

}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  var canv = document.getElementById("defaultCanvas0");
  canv.setAttribute('style', "min-width: 1472px !important")
  canv.setAttribute('style', "min-height: 396px !important")
  mainScript = document.getElementById("mainScript");

}

function goInside() {
    mainScript.setAttribute('src', 'sketch.js')
}


function movement() {
  if (inBounds()){
    if (keyIsDown(LEFT_ARROW)) {
      position_x = position_x - 4;
      bob = left;
    } else if (keyIsDown(RIGHT_ARROW)) {
      position_x = position_x + 4;
      bob = right;
    } else if (keyIsDown(UP_ARROW)) {
      position_y = position_y - 4;
      bob = back;
    } else if (keyIsDown(DOWN_ARROW)) {
      position_y = position_y + 4;
      bob = front;
    } else {
    }
  }
  image(bob, position_x, position_y, 300, 300);
}

function inBounds() {
   return true;
}

function openDoor() {
  if(position_y > 220 && position_y < 555 && position_x > 912 && position_x < 1106){
    door_button.show();
    image(door_button_img, 1050, 550, 160, 80);
  }else{
    door_button.hide();
  }
}


function draw() {
  image(outside, 0, 0, 2472/2,1396/2);
  movement();
}
