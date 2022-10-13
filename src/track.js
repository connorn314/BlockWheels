import MovingObject from "./moving_object";


export default class Track extends MovingObject {
    constructor(game, DX, DY){
        super(game)
        this.velocityX = 0
        this.positionY = Track.getRandomInt(0, this.dimensions.height)
        this.dX = DX
        this.dY = DY
        if (this.dX === undefined && this.dY === undefined){
            this.dX = this.generateDX();
            this.dY = this.generateDY();
        }
        this.vector = Math.atan(this.dY/this.dX)
    }

    firstTrack(){
        this.positionY = (this.game.dimensions.height / 3) * 2
        this.positionX = this.dimensions.width / 5
    }

    animate(){
        this.moveTrack()
        this.drawDownHill()
        this.boundBy()
    }

    drawDownHill(){
        this.downHillBox = new Path2D();
        this.game.ctx.fillStyle = '#fef102';
        this.game.ctx.strokeStyle = '#f01924';
        this.game.ctx.lineWidth = 15;
        let offsetx = this.positionX - this.game.cameraX
        let offsety = this.positionY - this.game.cameraY
        this.downHillBox.moveTo(offsetx, offsety)
        this.downHillBox.lineTo(offsetx + this.dX, offsety + this.dY)
        this.downHillBox.lineTo(offsetx + this.dX, offsety + this.dY + 25)
        this.downHillBox.lineTo(offsetx, offsety + 15)
        this.downHillBox.closePath()
        this.game.ctx.stroke(this.downHillBox);
        this.game.ctx.fill(this.downHillBox);
    }

    drawCurve(){

    }

    moveTrack(){
        this.positionX -= this.velocityX 
    }

    boundBy(){ // we'll just focus on the top line of the track at the moment
        this.hitBox.topLeft = [this.positionX, this.positionY]
        this.hitBox.topRight = [this.positionX + this.dX, this.positionY + this.dY]
    }

    generateDX(){
        return Track.getRandomInt(300, 900)
    }
    generateDY(){ 
        return Track.getRandomInt(50, 200)
    }


    static getRandomInt(min, max){
        return Math.random() * (max - min) + min;
    }
}

const T_CONSTANTS = {
    TRACK_H: 20,
    TRACK_L: 900, 
    VECTOR: Math.PI / 32
}