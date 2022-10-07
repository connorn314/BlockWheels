import MovingObject from "./moving_object";
import Track from "./track";

export default class Car extends MovingObject {
    constructor(game){
        super(game);
        this.velocityX = CONSTANTS.VEL_X;
        this.velocityY = CONSTANTS.VEL_Y;
        this.jumpPower = 0;
        this.grounded = false;
        
    }

    animate(){
        this.drawCar();
        this.move();
    }

    move(){
        this.positionY += this.velocityY;
        if (this.grounded === false){
            this.velocityY += CONSTANTS.GRAVITY;
        }
    }

    preJump(){
        if (this.jumpPower < 1.5){
            this.jumpPower += .5;
        }
    }

    jump(){
        this.velocityY = -12 * this.jumpPower;
        this.jumpPower = 0;
        this.grounded = false;
    }


    drawCar(){
        this.game.ctx.fillStyle = 'orangered';
        this.game.ctx.fillRect(this.positionX, this.positionY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
    }

    isBoundBy(){
        const boundsObject = {
            bottomLeft: [this.positionX, this.positionY + CONSTANTS.CAR_HEIGHT],
            bottomRight: [this.positionX + CONSTANTS.CAR_WIDTH, this.positionY + CONSTANTS.CAR_HEIGHT]
        }
        this.hitBox = boundsObject
    }

    landedOnTrack(track){
        if (this.isCollidedWith(track)){
            this.velocityY = 0;
            this.grounded = true;
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