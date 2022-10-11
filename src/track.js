import MovingObject from "./moving_object";


export default class Track extends MovingObject {
    constructor(game){
        super(game)
        this.velocityX = 0
        this.positionY = Track.getRandomInt(0, this.dimensions.height)
        this.dX = 800
        this.dY = 100
        this.vector = Math.atan(this.dY/this.dX)
        // this.vector = 0
    }

    firstTrack(){
        this.positionY = (this.game.dimensions.height / 3) * 2
        this.positionX = this.dimensions.width / 5
    }

    animate(){
        this.moveTrack()
        // this.drawFlat()
        this.drawDownHill()
        this.boundBy()
    }

    drawDownHill(){
        this.downHillBox = new Path2D();
        this.game.ctx.fillStyle = 'orangered';
        let offsetx = this.positionX - this.game.cameraX
        this.downHillBox.moveTo(offsetx, this.positionY)
        this.downHillBox.lineTo(offsetx + this.dX, this.positionY + this.dY)
        this.downHillBox.lineTo(offsetx + this.dX, this.positionY + this.dY + 20)
        this.downHillBox.lineTo(offsetx, this.positionY + 20)
        this.downHillBox.closePath()
        this.game.ctx.fill(this.downHillBox);
    }

    drawFlat(){
        this.trackBox = new Path2D();
        this.center = [this.positionX + T_CONSTANTS.TRACK_L/2, this.positionY + T_CONSTANTS.TRACK_H/2]
        this.trackBox.rect(this.positionX - this.game.cameraX, this.positionY, T_CONSTANTS.TRACK_L, T_CONSTANTS.TRACK_H)
        this.game.ctx.fillStyle = "orangered"
        this.game.ctx.fill(this.trackBox)
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


    static getRandomInt(min, max){
        return Math.random() * (max - min) + min;
    }
}

const T_CONSTANTS = {
    TRACK_H: 20,
    TRACK_L: 900, //Track.getRandomInt(500, 900)
    VECTOR: Math.PI / 32
    // SPEED: 5
}