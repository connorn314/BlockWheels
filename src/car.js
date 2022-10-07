import MovingObject from "./moving_object";
import Track from "./track";

export default class Car extends MovingObject {
    constructor(game){
        super(game);
        this.positionX = this.dimensions.width / 4
        this.velocityX = CONSTANTS.VEL_X;
        this.velocityY = CONSTANTS.VEL_Y;
        this.jumpPower = .5;
        this.grounded = false;
        
    }

    animate(){
        this.drawCar();
        this.move();
        this.isBoundBy()
    }

    move(){
        this.positionY += this.velocityY;
        if (this.grounded === false && this.velocityY < CONSTANTS.TERMINAL_VEL){
            this.velocityY += CONSTANTS.GRAVITY;
        }
    }

    preJump(){
        if (this.jumpPower < 2){
            this.jumpPower += .5;
        }
    }

    jump(){
        if (this.grounded === true){
            this.velocityY = -12 * this.jumpPower;
            this.grounded = false;
        }
        this.jumpPower = .5;
    }


    drawCar(){
        this.game.ctx.fillStyle = 'orangered';
        this.game.ctx.fillRect(this.positionX, this.positionY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
    }

    isBoundBy(){
        this.hitBox.bottomLeft = [this.positionX, this.positionY + CONSTANTS.CAR_HEIGHT]
        this.hitBox.bottomRight = [this.positionX + CONSTANTS.CAR_WIDTH, this.positionY + CONSTANTS.CAR_HEIGHT]
    }

    landedOnTrack(){
        for (let i = 0; i < this.game.tracks.length; i++){
            if (this.isCollidedWith(this.game.tracks[i])){
                this.velocityY = 0;
                this.grounded = true;
                break 
            } else {
                this.grounded = false
            }
        }
    }

    

}

const CONSTANTS = {
    GRAVITY: 0.8,
    TERMINAL_VEL: 12,
    CAR_WIDTH: 80,
    CAR_HEIGHT: 50,
    VEL_X: 0,
    VEL_Y: 0
}