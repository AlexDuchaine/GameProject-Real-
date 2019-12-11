class Obstacle {
    constructor() {
        this.position = new Vector(990, Math.floor(Math.random() * 60) + 410);
        this.velocity = new Vector(0,0);
        this.width =  Math.floor(Math.random() * 10) + 20;
        this.height = Math.floor(Math.random() * 10) + 20;
        this.speed = Math.floor(Math.random() * -5) - 4;
        this.hitEdge = false;
    }

    draw() {
        context.strokeStyle = '#ffe6e6';
        context.fillStyle = '#4b0066';

        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.strokeRect(this.position.x, this.position.y, this.width, this.height);

    }

    //Limit (Doesn't go through walls)
    checkBounds() {
        if(this.position.x <= 10) {
            this.hitEdge = true
        }
        else {
            this.hitEdge = false
        }
    }

    update() {
        this.checkBounds();
        this.velocity.x = this.speed;
        this.position.x += this.velocity.x;

        this.draw();
    }
}