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
        this.landing = false;
        this.hypotenuse = Math.sqrt(Math.pow(CONSTANTS.CAR_WIDTH/2, 2) + Math.pow(CONSTANTS.CAR_HEIGHT/2, 2))
        this.theta = Math.atan((CONSTANTS.CAR_HEIGHT/2)/(CONSTANTS.CAR_WIDTH/2))
    }

    animate(){
        this.jump()
        this.rotateCar();
        this.move();
        this.drawCar();
        this.isBoundBy();
        this.landedOnTrack();
        this.landProperly();
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
                this.jumpPower += .25;
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
        if (this.game.keyState.leftDown === true && this.grounded === false){
            this.rotation = true
            this.vector += -Math.PI / 64
        } else if (this.game.keyState.rightDown === true && this.grounded === false){
            this.rotation = true
            this.vector += Math.PI / 64
        } else {
            this.rotation = false
            // this.vector = 0
        }
    }

    drawCar(){
        this.carBox = new Path2D();
        this.game.ctx.save()
        this.center = [this.positionX + CONSTANTS.CAR_WIDTH/2, this.positionY + CONSTANTS.CAR_HEIGHT/2]
        // if (this.landing != {}){
        //     this.landProperly();
        // }
        if (this.rotation === true || this.vector != 0){
            this.game.ctx.translate(...this.center);
            this.game.ctx.rotate(this.vector % (Math.PI * 2));
            this.game.ctx.translate(-this.center[0], -this.center[1]);
        }
        this.carBox.rect(this.positionX, this.positionY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
        this.game.ctx.fillStyle = 'orangered';
        this.game.ctx.fill(this.carBox)
        // this.game.ctx.fillRect(this.positionX, this.positionY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
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
            let collisionObj = this.isCollidedWith(this.game.tracks[i])
            if (collisionObj !== false){
                // console.log(this.isCollidedWith(this.game.tracks[i]))
                this.velocityY = 0;
                if (Object.keys(collisionObj).length === 2){
                    this.landing = false;
                    this.grounded = true; //means you can't jump until you land
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
            let currentVec = this.vector % (Math.PI * 2)
            if ( currentVec < Math.PI / 2 && currentVec > 0 ){
                // console.log("tip left")
                this.rotation = true
                this.vector += -Math.PI / 64

            } else if (currentVec > -Math.PI / 2 && currentVec < 0){
                // console.log("tip right")
                this.rotation = true
                this.vector += Math.PI / 64
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