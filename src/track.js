import MovingObject from "./moving_object";


export default class Track extends MovingObject {
    constructor(game){
        super(game)
        this.velocityX = 0
        this.positionY = Track.getRandomInt(0, this.dimensions.height)
    }

    firstTrack(){
        this.positionY = (this.game.dimensions.height / 3) * 2
        this.positionX = this.dimensions.width / 5
    }

    animate(){
        this.moveTrack()
        this.drawFlat()
        this.boundBy()
    }

    drawFlat(){
        this.game.ctx.fillStyle = "orangered"
        this.game.ctx.fillRect(this.positionX, this.positionY, T_CONSTANTS.TRACK_L, T_CONSTANTS.TRACK_H)
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
    TRACK_L: 900 //Track.getRandomInt(500, 900)
    // SPEED: 5
}