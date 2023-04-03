var  apple, appleImg
var wood, woodImg, crackedWood, crackedWoodImg, crackedWood2, crackedWood2Img
var crossSword, crossedSwordImg
var fullSword, fullSwordImg, remainingSword, remainingSwordImg
var sword, swordImg
var background,  backgroundImg

function preload(){
   
appleImg = loadImage("assets/apple.png")
woodImg = loadAnimation("assets/fullWood.png")
crackedWoodImg = loadImage("assets/crackedWood.png")
crackedWood2Img = loadImage("assets/crackedWood2.png")
crossedSwordImg = loadImage("assets/crossedSwords.png")
fullSwordImg = loadImage("assets/fullSword.png")
remainingSwordImg = loadImage("assets/remainingSword.png")
swordImg = loadImage("assets/sword.png")
backgroundImg = loadImage("assets/woodenbg.jpg")

}


function setup(){
createCanvas(600,840)

apple = createSprite(550,40,400,100)
apple.addImage(appleImg)
apple.scale = 0.08

wood = createSprite(300,300, 400,400)
wood.addAnimation("wood", woodImg)
wood.scale = 0.8

/*crackedWood = createSprite(300,420,400,400)
crackedWood.addImage(crackedWoodImg)
crackedWood.scale = */

/*crackedWood2 = createSprite(300,420,400,400)
crackedWood2.addImage(crackedWood2Img)
crackedWood2.scale = 0. */

crossedSword = createSprite(200,40,50,50)
crossedSword.addImage(crossedSwordImg)
crossedSword.scale = 0.10

fullSword1 = createSprite(35,720,50,50)
fullSword1.addImage(fullSwordImg)
fullSword1.scale = 0.15

fullSword2 = createSprite(35,680,50,50)
fullSword2.addImage(fullSwordImg)
fullSword2.scale = 0.15

fullSword3 = createSprite(35,640,50,50)
fullSword3.addImage(fullSwordImg)
fullSword3.scale = 0.15

fullSword4 = createSprite(35,600,50,50)
fullSword4.addImage(fullSwordImg)
fullSword4.scale = 0.15

fullSword5 = createSprite(35,560,50,50)
fullSword5.addImage(fullSwordImg)
fullSword5.scale = 0.15

fullSword6 = createSprite(35,520,50,50)
fullSword6.addImage(fullSwordImg)
fullSword6.scale = 0.15

remainingSword = createSprite(250,40,50,50)
remainingSword.addImage(remainingSwordImg)
remainingSword.scale = 0.03

sword = createSprite(300,700)
sword.addImage(swordImg)
sword.scale = 0.50

obstacle = createSprite()
obstacle.addImage(swordImg)
obstacle.scale = 0.50

}

function draw(){
background(backgroundImg)

wood.rotationSpeed = 15

drawSprites()
}