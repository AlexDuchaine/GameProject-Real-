class Obstacle {
    constructor() {
        this.position = new Vector(990, Math.floor(Math.random() * 60) + 410);
        this.velocity = new Vector(0,0);
        this.width =  Math.floor(Math.random() * 10) + 20;
        this.height = Math.floor(Math.random() * 10) + 20;
        this.speed = Math.floor(Math.random() * -5) - 4;
        this.hitEdge = false;
    }


}