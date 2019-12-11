const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let keys = {};

canvas.width = 1000;
canvas.height = 600;


    let player = new Player();
    
    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height);

            //Bottom platform
            context.fillStyle = "#663300";
            context.strokeStyle = "#0d0d0d";
            context.fillRect(0, 500, 1000, 10);
            context.strokeRect(0, 500, 1000, 10);

            if(keys.w && player.isJumping == false) {
                player.jump(); //2D Motion
            }

        
            player.update();
            
        }

    

    animate();
    canvas.focus();
