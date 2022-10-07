
export default class MovingObject {
    constructor(game){
        this.velocityX = 0;
        this.velocityY = 0;
        this.dimensions = game.dimensions;
        this.positionX = this.dimensions.width/4;
        this.positionY = this.dimensions.height/2;
        this.game = game;
    }

    isCollidedWith(boundsObject){ // this will eventually expect an array of items to potentially collide with
    
    }

    

    unknown(){
        console.log(this.velocity)
    }
}