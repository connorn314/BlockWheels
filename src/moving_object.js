
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
        this.trackBox = new Path2D()
        this.downHillBox = new Path2D()
    }

    isCollidedWith(boundsObject){ // will only be called on t he car and this will eventually expect an array of items to potentially collide with
        let collision = {}
        for (let corner in this.hitBox){
            let pos = this.hitBox[corner]
            if (this.game.ctx.isPointInPath(boundsObject.trackBox, pos[0], pos[1])){
                collision[corner] = pos
            } else if (this.game.ctx.isPointInPath(boundsObject.downHillBox, pos[0], pos[1])){
                collision[corner] = pos
            }
        }
        if (JSON.stringify(collision) === '{}'){
            collision = false
        }
        return collision
    }

}