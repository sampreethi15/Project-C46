var diverImg, heartImg, pearlImg, sharkImg, starFishImg, underwaterImg, venusFlyTrapImg;
var game, form, player;
var allPlayers;
var players, player1, player2;
var obs1, starFishGrp;
var obs2, heartGrp;
var obs3, sharkGrp;
var obs4, venusFlyTrapGrp;
var playerCount;
var gameState = 0;

function preload(){
diverImg = loadImage("Diver.png");
heartImg = loadImage("Heart .png");
pearlImg = loadImage("Pearl .png");
sharkImg = loadImage("Shark .png");
starFishImg = loadImage("Starfish .png");
underwaterImg = loadImage("underwater.jpg");
venusFlyTrapImg = loadImage("Venus Flytrap .png");
}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 30, displayHeight - 50);
    console.log(database);
    game = new Game();
    game.getState();
    game.start();
   
}

function draw(){
    background(underwaterImg);
  if(playerCount === 2){
      game.updateState(1);
  }
  if(gameState === 1){
      clear();
      game.play();
  }
    
}

