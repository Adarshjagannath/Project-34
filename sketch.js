//Create variables here

var dog, happyDog, database, foodS, foodStock;
var d1img,d2img;

function preload()
{
  //load images here
  d1img = loadImage("images/dogimg.png");
  d2img = loadImage("images/dogimg1.png");
}

function setup(){
  createCanvas(700,700);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(350,350,20,20);
  dog.addImage("dog",d1img);

}


function draw() {  
 background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("happyDog",d2img);
  }

  drawSprites();
  //add styles here

  textSize(3);
  fill("red");
  stroke(3);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}


