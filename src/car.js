import MovingObject from "./moving_object";

export default class Car extends MovingObject {
    constructor(game){
        super(game);
        this.velocityX = CONSTANTS.VEL_X;
        this.velocityY = CONSTANTS.VEL_Y;
        this.jumpPower = 0;
        // this.hitBounds = this.isBoundBy();
    }

    animate(){
        this.drawCar();
        this.move();
    }

    move(){
        this.positionY += this.velocityY;
        this.velocityY += CONSTANTS.GRAVITY;
    }

    preJump(){
        if (this.jumpPower < 1.5){
            this.jumpPower += .5 ;
        }
    }

    jump(){
        this.velocityY = -12 * this.jumpPower;
        this.jumpPower = 0;
    }


    drawCar(){
        this.game.ctx.fillStyle = 'orangered';
        this.game.ctx.fillRect(this.positionX, this.positionY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
    }

    isBoundBy(){
        return boundsObject = {
            bottomLeft: [this.positionX, this.positionY + CONSTANTS.CAR_HEIGHT],
            bottomRight: [this.positionX + CONSTANTS.CAR_WIDTH, this.positionY + CONSTANTS.CAR_HEIGHT]
        }
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