var dog,happyDog,database
var foodS, foodStock 

function preload()
{
    img1=loadImage("images/dogImg.png");
 img2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  Database=firebase.database();
  foodStock=Database.ref('Food');
  dog=createSprite(250,300,150,150);
  dog.addImage(img1);
foodStock.on("value",readStock);
dog.scale=0.15;
}


function draw() {  
background(46,139,87);


if(keyWentDown(UP_ARROW)){
  console.log(foodS)
  writeStock(foodS);
  dog.addImage(img2);
}
  drawSprites();
  fill(255,255,254);
   stroke("black");
    text("Food remaining : "+foodS,170,200); textSize(13)
}
  
  function readStock(data){
    foodS=data.val();
  }
  
  function writeStock(x)
  { if(x<=0){ x=0;
   }
  else
  { x=x-1;
   }
   Database.ref('/').update({ Food:x })
   }
    
  



