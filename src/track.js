import MovingObject from "./moving_object";


export default class Track extends MovingObject {
    constructor(dimensions){
        super(dimensions)
        this.positionx = this.dimensions.width / 4
        this.positiony = (this.dimensions.height / 3) * 2
    }

    animate(ctx){
        this.drawFlat(ctx)
    }

    drawFlat(ctx){
        ctx.fillStyle = "orangered"
        ctx.fillRect(this.positionx, this.positiony, T_CONSTANTS.TRACK_L, T_CONSTANTS.TRACK_H)
    }

    drawCurve(ctx){

    }



    // we'll use this later
    getRandomY(min, max){
        return Math.random() * (max - min) + min;
    }
}

const T_CONSTANTS = {
    TRACK_H: 20,
    TRACK_L: 900
    // SPEED: 5
}