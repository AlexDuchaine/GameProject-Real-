class Player {
    constructor() {
        this.position = new Vector(canvas.width/2, canvas.height - 300);
        this.velocity = new Vector(0,0);
        this.width = 20;
        this.height = 20;
        this.isJumping = false;
        this.score = 0;
    }

    draw() {
        context.strokeStyle = '#0066ff';
        context.fillStyle = '#1aff1a';

        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.strokeRect(this.position.x, this.position.y, this.width, this.height);

        this.displayStats();
    }

    displayStats() {

        context.save();
		context.font = "12px Arial";
		context.fillStyle = "black";
		context.fillText(`Position: (${this.position.x.toFixed(0)}, ${this.position.y.toFixed(0)})`, 10, 20);
		context.fillText(`Velocity: (${this.velocity.x.toFixed(2)}, ${this.velocity.y.toFixed(0)})`, 10, 40);
        context.fillText(`Jumping: ${this.isJumping}`, 10, 60);
        context.fillText(`Score: ${this.score}`, 10, 80);
		context.restore();
    }

    jump() {
        if(this.isJumping == false) {
            this.velocity.y -= 30;
            this.isJumping = true;
        }
    }

    update() {
        this.velocity.y += 1; //gravity
        this.position.y += this.velocity.y;
        this.velocity.y *= 0.9; //friction
        if(this.position.y > canvas.height - 100 - this.height) {
            this.isJumping = false;
            this.position.y = canvas.height - 100 - this.height;
            this.velocity.y = 0;
        }
        this.draw();
    }
}