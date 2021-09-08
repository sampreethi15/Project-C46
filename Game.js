class Game {
    constructor(){

    }

    getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value", (data)=>{
  gameState = data.val();
  //console.log(gameState);
});
    }

    updateState(state){
database.ref('/').update({
    gameState : state
    
})
    }

    start(){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
        player1 = createSprite(150, 100);
       player1.addImage(diverImg);
       player1.scale = 0.5;
        player2 = createSprite(150, 500);
        player2.addImage(diverImg);
        player2.scale = 0.5;
        players = [player1, player2];
        starFishGrp = new Group();
        //console.log(player2.x);
       // player2.addImage(diverImg);
    }

    play(){
        background(underwaterImg);
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index = 0;
            var x;
            var y = 100;
            for(var plr in allPlayers){
                index = index+1;
                y = y + 200;
                x = (allPlayers[plr].distance - displayWidth);
               //console.log(allPlayers[plr].distance);
                //y = y+200;
                players[index - 1].x = x;
               // console.log(allPlayers[index - 1].x);
                players[index - 1].y = y;
                //console.log(allPlayers[index - 1].y);
            if(index === player.index){
                camera.position.x = players[index-1].x;
                camera.position.y = displayHeight/2;
            }

            }
        }


        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
           player.distance += 50;
           player.update();
        }

        if(frameCount%100 === 0){
       obs1 = createSprite(Math.round(random(camera.position.x, displayWidth)), Math.round(random(0, displayHeight)));
       starFishGrp.add(obs1);
       obs1.addImage(starFishImg);
       obs1.scale = 0.45;
       obs1.lifetime = 300;
        }

        drawSprites();
    }
    
}