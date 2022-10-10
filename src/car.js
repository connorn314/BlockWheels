import MovingObject from "./moving_object";
import Track from "./track";

export default class Car extends MovingObject {
    constructor(game){
        super(game);
        this.positionX = this.dimensions.width / 4
        this.velocityX = CONSTANTS.VEL_X;
        this.velocityY = CONSTANTS.VEL_Y;
        this.vector = 0
        this.jumpPower = .5;
        this.grounded = false;
        this.rotation = true;
        
    }

    animate(){
        this.rotateCar();
        this.jump()
        this.move();
        this.drawCar();
        this.isBoundBy()
    }

    move(){
        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
        if (this.grounded === false && this.velocityY < CONSTANTS.TERMINAL_VEL){
            this.velocityY += CONSTANTS.GRAVITY;
        }
        if (this.game.keyState.forward === true && this.positionX < this.dimensions.width / 3){
            this.velocityX = 4;
        } else if (this.game.keyState.forward === true && this.positionX >= this.dimensions.width / 3) {
            this.velocityX = 0;
            this.game.tracks.forEach (track => track.velocityX = 4)
            //tracks need to move
        } else {
            this.velocityX = 0
            this.game.tracks.forEach (track => track.velocityX = 0)
        }
    }

    jump(){
        if (this.game.keyState.spaceDown === true){
            if (this.jumpPower <= 1.5){
                this.jumpPower += .1;
            } 
        } else if (this.game.keyState.spaceRelease === true) {
            if (this.grounded === true){
                this.velocityY = -(CONSTANTS.TERMINAL_VEL) * this.jumpPower;
                this.grounded = false;
            }
            this.game.keyState.spaceRelease = false
            this.jumpPower = .5;
        }
    }

    rotateCar(){
        if (this.game.keyState.leftDown === true){
            this.rotation = true
            this.vector += -Math.PI / 64
        } else if (this.game.keyState.rightDown === true){
            this.rotation = true
            this.vector += Math.PI / 64
        } else {
            this.rotation = false
            // this.vector = 0
        }
    }

    drawCar(){
        // let carBox = new Path2D();
        this.game.ctx.save()
        if (this.rotation === true || this.vector != 0){
            this.game.ctx.translate(this.positionX + CONSTANTS.CAR_WIDTH/2, this.positionY + CONSTANTS.CAR_HEIGHT/2);
            this.game.ctx.rotate(this.vector);
            this.game.ctx.translate(-(this.positionX + CONSTANTS.CAR_WIDTH/2), -(this.positionY + CONSTANTS.CAR_HEIGHT/2));
        }
        // carBox.rect(this.positionX, this.positionY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
        this.game.ctx.fillStyle = 'orangered';
        // this.game.ctx. fill(carBox)
        this.game.ctx.fillRect(this.positionX, this.positionY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
        this.game.ctx.restore()
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