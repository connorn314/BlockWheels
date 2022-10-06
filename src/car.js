import MovingObject from "./moving_object";

export default class Car extends MovingObject {
    constructor(dimensions){
        super(dimensions);
        this.jumpNum = 0
        this.positionx = this.dimensions.width/4;
        this.positiony = this.dimensions.height/2;
        this.velocityX = CONSTANTS.VEL_X
        this.velocityY = CONSTANTS.VEL_Y
    }

    animate(ctx){
        this.drawCar(ctx)
        this.move()
    }

    move(){
        this.positiony += this.velocityY
        this.velocityY += CONSTANTS.GRAVITY
    }

    preJump(){
        if (this.jumpNum < 1.5){
            this.jumpNum += .5 
        }
    }

    jump(){
        this.velocityY = -12 * this.jumpNum
        this.jumpNum = 0
    }


    drawCar(ctx){
        ctx.fillStyle = 'orangered';
        ctx.fillRect(this.positionx, this.positiony, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT)
    }

    

}

const CONSTANTS = {
    GRAVITY: 0.3,
    TERMINAL_VEL: 10,
    CAR_WIDTH: 80,
    CAR_HEIGHT: 50,
    VEL_X: 0,
    VEL_Y: 0
}