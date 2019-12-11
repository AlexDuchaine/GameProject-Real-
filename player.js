class Player {
    constructor() {
        this.position = new Vector(canvas.width/2, canvas.height - 300);
        this.velocity = new Vector(0,0);
        this.width = 20;
        this.height = 20;
        this.isJumping = false;
        this.score = 0;
    }


}