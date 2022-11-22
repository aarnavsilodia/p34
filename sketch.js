var star,jeep,obs,noP,oneP,fullP,points,jeepImg,obsImg,bg;

function preload(){
    bg = createImg("bg.png")
    bg.size(windowWidth,windowHeight)
    bg.position(bg.width/2,bg.height/2)
    
    jeepImg = loadImg('car', "jeep.png")
    obsImg = loadImg('obs',"obstacle.png")

}
function setup(){
    createCanvas(1500,700)
    jeep = createSprite(100,50,75,50)
    jeep.setImg('car',jeepImg)
    imageMode(CENTER)
}
function draw(){
    bg.velocityX = -10
    if((bg.x + bg.x/2) >= 1500){
        bg.x = bg.width/2
    }
    drawSprites()
}