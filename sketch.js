var position_x = 800;
var position_y = 170;
var show = true;
var look_button;
var room;
var nature;
var backButton;
var scenes = [];
var vid_scenes = [];
var scene_index = 0;
var vid_index = 0;

function createScenes(){
  files = ["nature.gif", "amazon.gif", "australian.gif", "eruption.gif", "hurricane.gif", "iceberg.gif", "tuvalu.gif"];
  vids = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif"];
  for(let i = 0; i < files.length; i++){
    scene = createDiv('<img id="nature" src="'+files[i]+'" alt="this slowpoke moves"  width='+ windowWidth +' height='+ windowHeight+'/>' + '<img id="backArrow" src="backArrow.png" alt="this slowpoke moves" width="200px" height="100px"/>');
    scene.hide();
    scenes.push(scene);
  }
  for(let i = 0; i < vids.length; i++){
    scene = createDiv('<img id="phoneVid" src="'+vids[i]+'" alt="this slowpoke moves"  width='+ windowWidth/2.14 +' height='+ windowHeight/1.15+'/>');
    scene.hide();
    vid_scenes.push(scene);
  }
}

function preload() {
  room = loadImage('bed_room.jpg');
  bob = loadImage('bob.png');
  front = loadImage('bob.png');
  back = loadImage('bob_back.png');
  left = loadImage('bob_left.png');
  right = loadImage('bob_right.png');
  // backArrow = createDiv('<img src="backArrow.png" alt="this slowpoke moves"  width=200px height=100px display: block/>');
  // backArrow.hide();
  createScenes();
  nature = scenes[scene_index];
  nature.style('position', 'relative');
  nature.hide();
  phone_scene = createDiv('<img id="iphone" src="phone.png" alt="this slowpoke moves"  width='+ windowWidth/2 +' height='+ windowHeight+'/>' + '<img id="backArrow" src="backArrow.png" alt="this slowpoke moves" width="200px" height="100px"/>');
  phone_scene.hide();


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150,150,150);
  createLookButton();
  createBackButton();
  createPhoneButton();
}

function createBackButton(){
  backButton = createButton("");
  backButton.mousePressed(toBedRoom)
  backButton.hide();
  backButton.position(5, 5);
  backButton.style('background-color', "transparent");
  backButton.style('border', '0');
  backButton.style('width', '185px');
  backButton.style('height', '75px');
  backButton.style('z-index', '2');
}

function createLookButton(){
  look_button = createButton("");
  look_button.mousePressed(changeBG)
  look_button.hide();
  look_button.position(900, 100);
  look_button.style('background-color', "transparent");
  look_button.style('border', '0');
  look_button.style('width', '125px');
  look_button.style('height', '70px');
  look_button_img = loadImage('look_button.png');
}

function createPhoneButton(){
  phone_button = createButton("");
  phone_button.mousePressed(toPhone)
  phone_button.position(150, 100);
  phone_button.style('background-color', "transparent");
  phone_button.style('border', '0');
  phone_button.style('width', '125px');
  phone_button.style('height', '70px');
  phone_button.style('z-index', '1');
  phone_button_img = createDiv('<img id="phone_button" src="phone_button.png" alt="this slowpoke moves" width=125px height=70px/>');
  phone_button_img.style('position', 'absolute');
  phone_button_img.style('margin-left', '150px');
  phone_button_img.style('margin-top', '100px');
  phone_button_img.style('z-index', '0');
}

function changeBG() {
  nature.show();
  look_button.hide();
  backButton.show();
}

function toBedRoom() {
  nature.hide();
  look_button.show();
  backButton.hide();
}

function phoneToBedRoom(){
  phone_scene.hide();
  backButton2.hide();
  phone_button.show();
  phone_button_img.show();
  if(vid_index == 0){
    vid_scenes[4].hide();
  } else {
  vid_scenes[(vid_index-1)].hide();
  }
}

function createBackButton2(){
  backButton2 = createButton("");
  backButton2.mousePressed(phoneToBedRoom)
  backButton2.hide();
  backButton2.position(5, 5);
  backButton2.style('background-color', "transparent");
  backButton2.style('border', '0');
  backButton2.style('width', '185px');
  backButton2.style('height', '75px');
  backButton2.style('z-index', '2');
}

function toPhone() {
  phone_button.hide();
  phone_button_img.hide();
  phone_scene.show();
  createBackButton2();
  backButton2.show();
  scene_index+=1;
  nature = scenes[scene_index];
  vid_scenes[vid_index].show();
  vid_index = (vid_index + 1) % 5;
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
  // console.log('position_y');
  // console.log(position_y);
  // console.log('position_x');
  // console.log(position_x);

}

function inBounds() {
  if(400 < position_x && position_x < 492){
    bound_1 = (-0.31818181818182 * position_x) + 202.54545454545;
    if(position_y < bound_1){
      position_y = position_y + 1;
      return false;
    }
  }

  if(396 < position_x && position_x < 764 && 72 < position_y  && position_y < 224){
    bound_2 = (position_y + 91.565217391304)/ 0.41304347826087;
    if(position_x < bound_2){
      position_x = position_x + 1;
      return false;
    }
  }
  if(520 < position_x && position_x < 764 && 224 < position_y  && position_y < 286){
    bound_3 = (-0.25409836065574 * position_x) + 418.13114754098;
    if(position_y < bound_3){
      position_y = position_y + 1;
      return false;
    }
  }
  if(168 < position_x && position_x < 520 && 186 < position_y  && position_y < 286){
    bound_4 = (position_y - 151.05617977528)/ 0.25561797752809
    if(position_x > bound_4){
      position_x = position_x - 1;
      position_y = position_y + 1;
      return false;
    }
  }

  if(0 < position_x && position_x < 180 && 175 < position_y  && position_y < 280){
    bound_5 =  -0.50229885057471*position_x + 281.48648648649;
    if(position_y < bound_5){
      position_y = position_y + 1;
      return false;
    }
  }
  if(0 < position_x && position_x < 468 && 185 < position_y  && position_y < 428){
    bound_6 = (position_y - 270)/ 0.31623931623932
    if(position_x < bound_6){
      position_x = position_x + 1;
      return false;
    }
  }
  if(450 < position_x && position_x < 1060 && 230 < position_y  && position_y < 418){
    bound_7 =  -0.33333333333333*position_x + 574;
    if(position_y > bound_7){
      position_y = position_y - 1;
      return false;
    }
  }
    if(487 < position_x && position_x < 1026 && 38 < position_y  && position_y < 232){
    bound_8 = (position_y + 118.24860853432)/ 0.34137291280148;
    if(position_x > bound_8){
      position_x = position_x - 1;
      return false;
    }
  }

    bound_9 = (position_x * -0.375)+ 593.5;
    if(position_y > bound_9){
      position_y = position_y - 1;
      return false;
    }
   return true;
}

function showNature() {
  if(position_y > 125 && position_y < 237 && position_x > 712 && position_x < 906){

    look_button.show();
    image(look_button_img, 990,80, 160,80);
  }else{
    // nature.hide();
    look_button.hide();
  }
}


function draw() {
  image(room, 0, 0, windowWidth,windowHeight);
  movement();
  showNature();
  if(scene_index >= 7){
    scene = createDiv('<img id="end" src="end.gif" alt="this slowpoke moves"  width='+ windowWidth +' height='+ windowHeight+'/>' + '<img id="gameOver" src="gameOver.png" alt="this slowpoke moves" width="200px" height="100px"/>');
  }
}
