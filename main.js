const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let keys = {};

canvas.width = 1000;
canvas.height = 600;


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



    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        

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
        
        



    animate();
    canvas.focus();
