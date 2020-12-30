//Create variables here
var dog, dogImg,happyDogImg,database,foods,foodStock,gardenImg,backImg,back,manImg,backs,
milk,milk1,milk2,milk3,fedTime,lastFed,foodObj,feeding,dogVac,dogVacImg,man;
function preload()
{
  //load images here
  dogImg = loadImage("images/dog.png");
  happyDogImg = loadImage("images/dogImg1.png")
  milkImg = loadImage("images/Food Stock.png")
  gardenImg=loadImage("images/Garden.png");
  backImg=loadImage("images/open.jpg");
  manImg=loadImage("images/boy.png");
}

function setup() {
  createCanvas(1000, 700);
  
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  //foodStock.add(20);

  feed=createButton("FEED THE DOG");
  feed.position(200,95);
  feed.mousePressed(feedDog);

  addFood=createButton("ADD FOOD");
  addFood.position(315,95);
  addFood.mousePressed(addFoods)


  skipFeeds=createButton("skip Feed>>")
  skipFeeds.position(600,95);
  skipFeeds.mousePressed(skipFeed)

 
  backs=createSprite(500,350,1000,700);
  backs.shapeColor=color("green");
  back=createSprite(500,350,1000,700);
  back.shapeColor=color("green");
  back.scale=1
  
  dog = createSprite(350,350,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  milk = createSprite(170,400,10,10);
  milk.scale = 0.1;
  milk.shapeColor=color("green");

  man = createSprite(140,380,10,10);
  man.shapeColor=color("green")
 
 
  
  
}


function draw() {  
  background("green");
  
    textSize(20);
    fill(255);
    text("Note: Last Feed",150,50);
    text(": 5 PM",300,50);

    

    
  

  
  drawSprites();
  //add styles here

}



function readStock(data){
  foods = data.val();

}

function writeStock(x){
  
  database.ref("/").update({
    foods:x
  });
}

function feedDog(){
  dog.addImage(happyDogImg);
  milk.addImage(milkImg);
  man.addImage(manImg);

  

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){
  foodStock++;
  database.ref('/').update({
    Food:foodStock
  })
}

function skipFeed(){
  back.addImage(gardenImg);
  dog.visible=false;
  milk.visible=false;
  man.visible=false;
  backs.shapeColor=color("white");
}
