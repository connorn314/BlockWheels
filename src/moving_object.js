
export default class MovingObject {
    constructor(game){
        this.velocityX = 0;
        this.velocityY = 0;
        this.dimensions = game.dimensions;
        this.positionX = this.dimensions.width/4;
        this.positionY = this.dimensions.height/2;
        this.game = game;
    }

    isCollidedWith(boundsObject){ // will only be called on the car and this will eventually expect an array of items to potentially collide with
        console.log("hit")
        if (this.hitBox[bottomLeft][0] > boundsObject.hitBox[topLeft][0] || this.hitBox[bottomRight][0] < boundsObject.hitBox[topRight][0]){
            if (this.hitBox[bottomLeft][1] <= boundsObject.hitBox[topLeft][1]){ //only works for a car that doesn't tilt
                return true
            }
        }
        return false
    }

    

    unknown(){
        console.log(this.velocity)
    }
}