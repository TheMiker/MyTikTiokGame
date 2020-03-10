var position_x = 950;
var position_y = 250;
var show = true;
var look_button;
var door_button;
var door_buttonO;
var room;
var nature;
var backButton;
var scenes = [];
var vid_scenes = [];
var scene_index = 0;
var plant_button_img;
var vid_index = 0;
var mainScript = 0;
var plant_button;
var planted = 0;
var sapling;
var google =0;
// US physicist Alex Wissner-Gross claims that a typical Google search on a desktop computer produces about 7g CO2
// 2.2679619 grams of co2 are absorbed by a tree per hour

function reversePoll(){
  scene_index = scene_index - 0.00062998941;
}


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
  outside = loadImage('outside.png');
  progress = loadImage('progress.png');
  room = loadImage('bed_room.jpg');
  door = loadImage('BedroomDooronslant.png');
  bob = loadImage('bob.png');
  front = loadImage('bob.png');
  back = loadImage('bob_back.png');
  left = loadImage('bob_left.png');
  right = loadImage('bob_right.png');
  sapling = loadImage('sapling.png');
  // backArrow = createDiv('<img src="backArrow.png" alt="this slowpoke moves"  width=200px height=100px display: block/>');
  // backArrow.hide();
  createScenes();
  nature = scenes[Math.round(scene_index)];
  nature.style('position', 'relative');
  nature.hide();
  phone_scene = createDiv('<img id="iphone" src="phone.png" alt="this slowpoke moves"  width='+ windowWidth/2 +' height='+ windowHeight+'/>' + '<img id="backArrow" src="backArrow.png" alt="this slowpoke moves" width="200px" height="100px"/>');
  phone_scene.hide();


}
function googleEmissions(){
  google = google +  63419.5839583;
  console.log(google);
}

function setup() {
  setInterval(googleEmissions, 1000);
  createCanvas(windowWidth, windowHeight);
  var canv = document.getElementById("defaultCanvas0");
  canv.setAttribute('style', "min-width: 1472px !important")
  canv.setAttribute('style', "min-height: 396px !important")
  background(150,150,150);
  createLookButton();
  createBackButton();
  createPhoneButton();
  createDoorButton();
  createDoorButtonOutside();
  createPlantButton();
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

function createPlantButton(){
  plant_button = createButton("");
  plant_button.mousePressed(plantTheSapling)
  plant_button.hide();
  plant_button.position(898, 82);
  plant_button.style('background-color', "transparent");
  plant_button.style('border', '0');
  plant_button.style('width', '124px');
  plant_button.style('height', '60px');
  plant_button.style('z-index', '2');
  plant_button_img = loadImage('plant_button.png');
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

function createDoorButton(){
  door_button = createButton("");
  door_button.style('display','absolute');
  door_button.mousePressed(goOutSide)
  door_button.hide();
  door_button.position(946, 462);
  door_button.style('background-color', "transparent");
  door_button.style('border', '0');
  door_button.style('width', '125px');
  door_button.style('height', '60px');
  door_button.style('z-index', '2');

  door_button_img = loadImage('door_button.png');
}

function createDoorButtonOutside(){
  door_buttonO = createButton("");
  door_buttonO.style('display','absolute');
  door_buttonO.mousePressed(goInSide)
  door_buttonO.hide();
  door_buttonO.position(946, 464);
  door_buttonO.style('background-color', "transparent");
  door_buttonO.style('border', '0');
  door_buttonO.style('width', '125px');
  door_buttonO.style('height', '60px');
  door_buttonO.style('z-index', '2');
  door_button_img = loadImage('door_button.png');
}

function changeBG() {
  nature.show();
  look_button.hide();
  backButton.show();
}

function plantTheSapling() {
  plant_button.hide();
  if(planted == 0){
    setInterval(reversePoll, 1000);
  }
  planted = 1;
}

function goOutSide() {
  mainScript = 1;
  position_x = 360;
  position_y = 380;
  door_button.hide();
  phone_button.hide();
  phone_button_img.hide();
}

function goInSide() {
  mainScript = 0;
  position_x = 860;
  position_y = 230;
  door_button.show();
  phone_button.show();
  phone_button_img.show();
  door_buttonO.hide();
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
  nature = scenes[Math.round(scene_index)];
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
}

function movementOutside() {
  if (inBoundsOutside()){
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
  image(bob, position_x, position_y, 160, 160);
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

function openDoor() {
  if(position_y > 220 && position_y < 555 && position_x > 912 && position_x < 1106){
    door_button.show();
    image(door_button_img, 1050, 550, 160, 80);
  }else{
    door_button.hide();
  }
}

function openDoorOutside() {
  if(position_y > 340 && position_y < 390 && position_x > 310 && position_x < 390){
    door_buttonO.show();
    image(door_button_img, 1050, 550, 160, 80);
  }else{
    door_buttonO.hide();
  }
}

function plantSapling(){
  if(position_x > 668 && position_x < 856 && position_y < 356 && position_y > 156){
    plant_button.show();
    if(planted == 0){
      image(plant_button_img, 990,80, 160,80);
    }
  }else{
    // nature.hide();
    plant_button.hide();
  }
}

function draw() {
  if(mainScript == 0){
    image(room, 0, 0, 2472/2,1396/2);
    movement();
    image(door, 1120, 250, 100, 300);
    showNature();
    openDoor();
    if(scene_index >= 7){
      scene = createDiv('<img id="end" src="end.gif" alt="this slowpoke moves"  width='+ windowWidth +' height='+ windowHeight+'/>' + '<img id="gameOver" src="gameOver.png" alt="this slowpoke moves" width="200px" height="100px"/>' + '<p style="relative: absolute; color: red; padding-bottom: 50px">In the meantime, Google has produced: '+ google.toString()+' grams of carbon dioxide since the start of the game.</p>');
    }
  } else {
    image(outside, 0, 0, 2472/2,1396/2);
    movementOutside();
    openDoorOutside();
    plantSapling();
    if(planted == 1){
      image(sapling, 800, 370, 80,80);
    }
  }
  var c = color(200, 50, 25); 
  fill(c); 
  rect(10, 650, 400, 20);
  var c = color(28, 27, 26); 
  fill(c); 
  rect(10, 655, 390 * (scene_index/7), 10);
  noStroke();
 
  image(progress, (scene_index/7) * 390, 630, 100, 50);
  textSize(32);
  if(scene_index > 0){
    fill(200, 50, 25);
  } else {
    fill(50, 200, 25);
  }
  text(scene_index.toString(), 425, 671);
}


function inBoundsOutside() {
  if(216 < position_x && position_x < 634){
    if(position_y < 342){
      position_y = position_y + 1;
      return false;
    }
  }
  if(0 < position_y && position_y < 350){
    if(position_x > 630 && position_x < 643){
      position_x = position_x + 1;
  
      return false;
    }
  }

  if(0 < position_y && position_y < 330){
    if(position_x > 200 && position_x < 210){
      position_x = position_x - 1;
      return false;
    }
  }

  if(-20 < position_x && position_x < 1500){
    if(position_y > 530){
      position_y = position_y - 1;
      return false;
    }
  }

   if(0 < position_x && position_x < 1500){
    if(position_y < 64){
      position_y = position_y + 1;
      return false;
    }
  }

  if(0 < position_y && position_y < 1500){
    if(position_x > 1000){
      position_x = position_x - 1;
      return false;
    }
  }

  if(0 < position_y && position_y < 900){
    if(position_x < 0){
      position_x = position_x + 1;
      return false;
    }
  }

   return true;
}
