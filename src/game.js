import Car from "./car";
import Level from "./level";

export default class BotWheels {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.demensions = {
            width: canvas.width, 
            height: canvas.height
        };
        this.jump = 0
        document.addEventListener('keydown', this.spaceDown.bind(this))  ;
        document.addEventListener('keyup', this.spaceUp.bind(this));

    }

    animate() {
        this.level.animate(this.ctx);
        this.car.animate(this.ctx)

        if (this.running === true){
            requestAnimationFrame(this.animate.bind(this, this.ctx))
        }
    }

    restart() {
        this.level = new Level(this.demensions);
        this.car = new Car(this.demensions);
        this.running = false;
        this.play();
    }

    play() {
        this.running = true;
        this.animate()
    }

    spaceDown(e){   
        if (e.code === "Space" && this.running === true){
            this.car.preJump();
        }   
    }

    spaceUp(e){
        if (e.code === "Space" && this.running === true){
            this.car.jump();
        }  
    }
}

