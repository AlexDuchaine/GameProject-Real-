const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let keys = {};

canvas.width = 1000;
canvas.height = 600;

function gamePlay() {
    let player = new Player();
    const numberOfObstacles = 100000;
    let obstacles1 = new Array();
    for(let i = 0; i < numberOfObstacles; i++) {
        obstacles1.push(new Obstacle()); //array method #1
    }

    let obstacles2 = new Array();
    for(let i = 0; i < numberOfObstacles; i++) {
        obstacles2.push(new Obstacle()); //array method #1
    }

    let obstacles3 = new Array();
    for(let i = 0; i < numberOfObstacles; i++) {
        obstacles3.push(new Obstacle()); //array method #1
    }

    canvas.addEventListener('keydown', event => {
        keys[event.key] = true;
    });

    canvas.addEventListener('keyup', event => {
    	keys[event.key] = false;
    });

    let index1 = numberOfObstacles;
    let index2 = numberOfObstacles;
    let index3 = numberOfObstacles;

    let gameOver = false;
    let onMenu = true;
    var playAudio = document.getElementById('scholarships');

    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height);
        if(onMenu && !gameOver) {
            context.fillStyle = 'black';
            context.fillRect(0,0, canvas.width, canvas.height);
        
            context.font = "20px Arial";
            context.fillStyle = "white";   
            context.fillText("CUBE NINJA", canvas.width/2 - 70, 80);
            context.font = "14px Arial";
            context.fillText("Narrative: You're the less last Green Cube ninja left. You must avoid", 40, 140); //narrative
            context.fillText("every purple enemy ninja that comes your way! The bigger the enemy, the more points!", 106, 160); //narrative
            context.fillText("Instructions: To jump press the 'W' key", 40, 220); //instructions
            context.fillText("(You can choose to stay put or hop to dodge)", 120, 240); //instructions
            context.font = "11px Arial";
            context.fillText("Press the 'Enter' key to begin playing ->", 775,580);
            if(keys.Enter) {
                onMenu = false;
                playAudio.play(); //sound
            }
        }
        else if (!onMenu && !gameOver){

            //Bottom platform
            context.fillStyle = "#663300";
            context.strokeStyle = "#0d0d0d";
            context.fillRect(0, 500, 1000, 10);
            context.strokeRect(0, 500, 1000, 10);

            if(keys.w && player.isJumping == false) {
                var jumpAudio = document.getElementById('jumpSound');
                jumpAudio.play(); //sound
                player.jump(); //2D Motion
            }

            //IF COLLISION ON ANY CUBE BY PLAYER
            if((player.position.x < obstacles1[index1 - 1].position.x + obstacles1[index1 - 1].width && player.position.x + player.width > obstacles1[index1 - 1].position.x && player.position.y < obstacles1[index1 - 1].position.y + obstacles1[index1 - 1].height && player.position.y + player.height > obstacles1[index1 - 1].position.y) || 
            (player.position.x < obstacles2[index2 - 1].position.x + obstacles2[index2 - 1].width && player.position.x + player.width > obstacles2[index2 - 1].position.x && player.position.y < obstacles2[index2 - 1].position.y + obstacles2[index2 - 1].height && player.position.y + player.height > obstacles2[index2 - 1].position.y) ||
            (player.position.x < obstacles3[index3 - 1].position.x + obstacles3[index3 - 1].width && player.position.x + player.width > obstacles3[index3 - 1].position.x && player.position.y < obstacles3[index3 - 1].position.y + obstacles3[index3 - 1].height && player.position.y + player.height > obstacles3[index3 - 1].position.y)) {
                gameOver = true;
            }

            player.update();
            obstacles1[index1 - 1].update();
            if(player.score >= 150) {
                obstacles2[index2 - 1].update();
            }
            if(player.score >= 350) {
                obstacles3[index3 - 1].update();
            }

            if(obstacles1[index1 - 1].hitEdge == true) {
                player.score += obstacles1[index1 - 1].height; //scoring
                obstacles1.pop(); //array method #2
                index1--;
            }

            if(obstacles2[index2 - 1].hitEdge == true) {
                player.score += obstacles2[index2- 1].height; //scoring
                obstacles2.pop(); //array method #2
                index2--;
            }


            if(obstacles3[index3 - 1].hitEdge == true) {
                player.score += obstacles3[index3- 1].height; //scoring
                obstacles3.pop(); //array method #2
                index3--;
            }
        }
        else if (!onMenu && gameOver) {
            playAudio.pause();
            context.fillStyle = 'black';
            context.fillRect(0,0, canvas.width, canvas.height);
        
            context.font = "30px Arial";
            context.fillStyle = "white";   
            context.fillText("GAME OVER", canvas.width/2 - 80, canvas.height/2);
            context.font = "11px Arial";
            context.fillText("Press the 'Enter' key to restart ->", 835 ,580);
            if(keys.Enter) {
                console.log("you pressed enter")
                onMenu = true;
                gameOver = false;
                gamePlay();
            }
        }

    }

    animate();
    canvas.focus();
}
gamePlay();