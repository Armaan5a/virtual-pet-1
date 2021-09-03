var dog,happydog,database
var foods,foodStock


function preload()
{
	dogi=loadImage("images/dogImg.png")
  hpdg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  
   database =firebase.database()

   dog = createSprite(400,400,100,100)
   dog.addImage(dogi)
   dog.scale=0.2
   
   foodStock=database.ref('food') 
   foodStock.on("value",stock)

}


function draw() {  
  background("orange")
  textSize(20)
  fill("red")
  text("press up arrow to feed",200,150)
  text("food remaining:"+foods,200,200)
  drawSprites();

  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
   dog.addImage(hpdg)
  }

}

function stock(data){
    foods=data.val()
}

function writeStock(x){
 if(x<=0){
 x=0
 }
 else
  x=x-1
 
  database.ref('/').update({
    food:x
  })
}
