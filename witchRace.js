const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player1Img = new Image();
player1Img.src="pinkHat.webp";

const player2Img = new Image();
player2Img.src="purpleHat.webp";

let player = {
    x:50,
    y:100
};

let comp = {
    x:50,
    y:200
};

function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    //Draw the finish line
    ctx.fillRect(750, 0, 10, canvas.height);

    //Draw the player on the screen
    ctx.drawImage(player1Img, player.x, player.y);

    //Draw the opponent on the screen
    ctx.drawImage(player2Img, comp.x, comp.y);
}

function update(){
    if(player.x > 750 && comp.x < player.x){
        ctx.font = "50px serif";
        ctx.fillText("You Win", 200, 40);
        cancelAnimationFrame(gameLoop);
        return;
    }
    else if (comp.x > 750 && player.x < comp.x){
        ctx.font = "50px serif";
        ctx.fillText("You Lose", 200, 40);
        cancelAnimationFrame(gameLoop);
        return;
    }
    comp.x += 1;
}

//Control the animation
function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);
}

document.body.onload = function() {
    draw();
}

document.onkeydown = function(e){
    if(e.key == "d"){
        player.x += Math.random() * 10 + 1;
        draw();
    }
    
}

document.getElementById("btnStart").onclick = function(){
    requestAnimationFrame(gameLoop);
    player.x = 10;
    comp.x = 10;
}

