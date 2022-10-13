
export default class MovingObject {
    constructor(game){
        this.velocityX = 0;
        this.velocityY = 0;
        this.dimensions = game.dimensions;
        this.positionX = this.dimensions.width;
        this.positionY = this.dimensions.height/4;
        this.hitBox = {}
        this.vector = 0
        this.game = game;
        this.trackBox = new Path2D()
        this.downHillBox = new Path2D()
    }

    isCollidedWith(boundsObject){ // will only be called on t he car and this will eventually expect an array of items to potentially collide with
        let collision = {}
        for (let corner in this.hitBox){
            let pos = this.hitBox[corner]
            if (this.pointInPath(boundsObject, pos[0], pos[1])){
                collision[corner] = pos
            }
        }
        if (JSON.stringify(collision) === '{}'){
            collision = false
        }
        return collision
    }

    pointInPath(boundsObject, x, y){ // improve eff by seperating condition logix into helper and only calculating eq once per for loop above
        let slope = (boundsObject.hitBox.topLeft[1] - boundsObject.hitBox.topRight[1])/(boundsObject.hitBox.topLeft[0] - boundsObject.hitBox.topRight[0])
        let intercept = boundsObject.hitBox.topRight[1] - (slope * boundsObject.hitBox.topRight[0]) 
        
        if ( y + 3 >= (slope * x) + intercept && x >= boundsObject.hitBox.topLeft[0] && x < boundsObject.hitBox.topRight[0]){
            return true
        } else {
            return false
        } 
    }
    
}