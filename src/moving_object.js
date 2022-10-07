
export default class MovingObject {
    constructor(game){
        this.velocityX = 0;
        this.velocityY = 0;
        this.dimensions = game.dimensions;
        this.positionX = this.dimensions.width;
        this.positionY = this.dimensions.height/2;
        this.hitBox = {}
        this.vector = 0
        this.game = game;
    }

    isCollidedWith(boundsObject){ // will only be called on the car and this will eventually expect an array of items to potentially collide with
        let collision = false
        if (this.hitBox.bottomLeft[0] > boundsObject.hitBox.topLeft[0] && this.hitBox.bottomRight[0] < boundsObject.hitBox.topRight[0]){
            if (this.hitBox.bottomLeft[1] <= boundsObject.hitBox.topLeft[1] + 12 && this.hitBox.bottomLeft[1] >= boundsObject.hitBox.topLeft[1]){ //only works for a car that doesn't tilt
                collision = true
            }
        }
        return collision
    }

}