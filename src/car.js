import MovingObject from "./moving_object";
import Track from "./track";

export default class Car extends MovingObject {
    constructor(game){
        super(game);
        this.positionX = this.dimensions.width / 4;
        this.velocityX = CONSTANTS.VEL_X;
        this.velocityY = CONSTANTS.VEL_Y;
        this.falling = 60
        this.accelerationX = 0;
        this.accelerationY = 0;
        this.vector = 0;
        this.jumpPower = .5;
        this.grounded = false;
        this.rotation = true;
        this.landing = false;
        this.spriteNum = 0;
        this.stagger = 5;
        this.hypotenuse = Math.sqrt(Math.pow(CONSTANTS.CAR_WIDTH/2, 2) + Math.pow(CONSTANTS.CAR_HEIGHT/2, 2));
        this.theta = Math.atan((CONSTANTS.CAR_HEIGHT/2)/(CONSTANTS.CAR_WIDTH/2));
    }

    animate(){
        this.jump()
        this.rotateCar();
        this.move();
        this.drawCar();
        this.isBoundBy();
        this.landedOnTrack();
        this.landProperly();
        if ((this.velocityX > 0 && this.grounded) || (this.game.keyState.forward === true && !this.grounded)){
            this.stagger -= 1
            if (this.stagger === 0){
                this.stagger = 5
                this.spriteNum += 1
            }
        }
        if (this.velocityY > 11){
            this.falling -= 1
        } else {
            this.falling = 60
        }
        if (this.falling === 0){
            this.game.gameOver();
        }
    }

    move(){
        if (this.velocityX < 8 && this.game.keyState.forward === true && this.grounded === true) {
            this.accelerationX = .1
        } else if ((this.velocityX < 8 && this.velocityX > 0 && this.game.keyState.forward === false && this.grounded === true) || this.velocityX >= 8 && this.grounded) {
            this.accelerationX = -.05
        } else {
            this.accelerationX = 0
        }

        if (this.grounded === false){
            if (this.velocityY < CONSTANTS.TERMINAL_VEL){
                this.velocityY += CONSTANTS.GRAVITY;
            } 

        } else {

            let hyp = this.velocityX / Math.cos(this.landingVector)

            let x = (hyp) * Math.cos(this.landingVector)
            let y = (hyp) * Math.tan(this.landingVector)

            this.velocityX = x;
            this.velocityY = y;
        }

        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
        this.velocityX += this.accelerationX;
    }

    jump(){
        if (this.game.keyState.spaceDown === true){
            if (this.jumpPower <= 1.6){
                this.jumpPower += .2;
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
        if (this.game.keyState.leftDown === true && this.grounded === false && this.landing === false){
            this.rotation = true
            this.vector += -Math.PI / 32
        } else if (this.game.keyState.rightDown === true && this.grounded === false && this.landing === false){
            this.rotation = true
            this.vector += Math.PI / 32
        } else {
            this.rotation = false
            // this.vector = 0
        }
    }

    drawCar(){
        this.carBox = document.getElementById("car-sprites")
        this.game.ctx.save()
        this.center = [this.positionX + CONSTANTS.CAR_WIDTH/2, this.positionY + CONSTANTS.CAR_HEIGHT/2]
        if (this.rotation === true || this.vector != 0){
            this.game.ctx.translate((this.center[0] - this.game.cameraX), this.center[1] - this.game.cameraY);
            this.game.ctx.rotate(this.vector % (Math.PI * 2));
            this.game.ctx.translate(-(this.center[0] - this.game.cameraX), -(this.center[1] - this.game.cameraY));
        }
        let sx = (this.spriteNum % 4) * 40
        let sy = 0
        this.game.ctx.drawImage(
            this.carBox,
            sx,
            sy,
            40,
            30,
            this.positionX - this.game.cameraX, 
            this.positionY - this.game.cameraY,
            CONSTANTS.CAR_WIDTH,
            CONSTANTS.CAR_HEIGHT,
        );
        this.game.ctx.restore()
    }

    isBoundBy(){
        // bottom left, top left, top right, bottom right
        let angleOne = this.vector + this.theta  // bottom right angle
        let angleTwo = this.vector - this.theta // top right angle
        let angleThree = -this.vector + this.theta // bottom left angle
        let angleFour = -this.vector - this.theta // top left angle
        let angleFive = this.vector // right
        let angleSix = -this.vector // left
        let cornerArray = [angleOne, angleTwo, angleThree, angleFour]
        let sideArray = [angleFive, angleSix]
        let coordinateArray = []
        cornerArray.forEach ((angle, i) => {
            let x = this.hypotenuse * Math.cos(angle)
            let y = this.hypotenuse * Math.sin(angle)
            if (i < 2){
                coordinateArray.push([this.center[0] + x, this.center[1] + y])
            } else {
                coordinateArray.push([this.center[0] - x, this.center[1] + y])
            }
        })
        this.hitBox.bottomRight = coordinateArray[0]
        this.hitBox.topRight = coordinateArray[1]
        this.hitBox.bottomLeft = coordinateArray[2]
        this.hitBox.topLeft = coordinateArray[3]

        sideArray.forEach ((angle, i) => {
            let x = (CONSTANTS.CAR_WIDTH/2) * Math.cos(angle)
            let y = (CONSTANTS.CAR_WIDTH/2) * Math.sin(angle)
            if (i === 0){
                coordinateArray.push([this.center[0] + x, this.center[1] + y])
            } else {
                coordinateArray.push([this.center[0] - x, this.center[1] + y])
            }
        })
        this.hitBox.rightSide = coordinateArray[4]
        this.hitBox.leftSide = coordinateArray[5]
    }

    landedOnTrack(){
        for (let i = 0; i < this.game.tracks.length; i++){
            let collisionObj = this.isCollidedWith(this.game.tracks[i]) // answer is here as to how to check if the car fell off map
            if (collisionObj !== false){
                this.velocityY = 0;
                this.landingVector = this.game.tracks[i].vector
                if (Object.keys(collisionObj).length === 2 && Object.keys(collisionObj).includes("bottomRight") && Object.keys(collisionObj).includes("bottomLeft")){
                    this.landing = false;
                    this.grounded = true;
                    this.vector = this.landingVector;
                } else {
                    this.landing = collisionObj;
                    this.grounded = false;
                }
                break 
            } else {
                this.landing = false;
                this.grounded = false;
            }
        }
    }

    landProperly(){
        if (this.landing !== false){
            if (this.landing.hasOwnProperty('bottomRight') || this.landing.hasOwnProperty('bottomLeft')){
                    this.vector = this.landingVector    
            } else {
                this.game.gameOver();
                this.landing = false
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