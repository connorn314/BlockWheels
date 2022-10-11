import MovingObject from "./moving_object";


export default class Track extends MovingObject {
    constructor(game){
        super(game)
        this.velocityX = 0
        this.positionY = Track.getRandomInt(0, this.dimensions.height)
        this.vector = Math.atan(100/800)
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
        // this.downHillBox.beginPath();
        this.game.ctx.fillStyle = 'orangered';
        this.downHillBox.moveTo(this.positionX, this.positionY)
        this.downHillBox.lineTo(this.positionX + 800, this.positionY + 100)
        this.downHillBox.lineTo(this.positionX + 800, this.positionY + 120)
        this.downHillBox.lineTo(this.positionX, this.positionY + 20)
        this.downHillBox.closePath()
        this.game.ctx.fill(this.downHillBox);
    }

    drawFlat(){
        this.trackBox = new Path2D();
        // this.game.ctx.save();
        this.center = [this.positionX + T_CONSTANTS.TRACK_L/2, this.positionY + T_CONSTANTS.TRACK_H/2]
        // this.game.ctx.translate(...this.center);
        // this.game.ctx.rotate(T_CONSTANTS.VECTOR % (Math.PI * 2));
        // this.game.ctx.translate(-this.center[0], -this.center[1]);
        this.trackBox.rect(this.positionX, this.positionY, T_CONSTANTS.TRACK_L, T_CONSTANTS.TRACK_H)
        this.game.ctx.fillStyle = "orangered"
        this.game.ctx.fill(this.trackBox)
        // this.game.ctx.restore();
    }

    drawCurve(){

    }

    moveTrack(){
        this.positionX -= this.velocityX 
    }

    boundBy(){ // we'll just focus on the top line of the track at the moment
        this.hitBox.topLeft = [this.positionX, this.positionY]
        this.hitBox.topRight = [this.positionX + T_CONSTANTS.TRACK_L, this.positionY]
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