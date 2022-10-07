import Car from "./car";
import Level from "./level";
import Track from "./track";

export default class BotWheels {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {
            width: canvas.width, 
            height: canvas.height
        };
        
        document.addEventListener('keydown', this.spaceDown.bind(this))  ;
        document.addEventListener('keyup', this.spaceUp.bind(this));

    }

    drawBackground(ctx) {
        ctx.fillStyle = "skyblue";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate() {
        this.drawBackground(this.ctx);
        this.animateTracks();
        this.car.animate();
        this.car.landedOnTrack();
        if (this.running === true){
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    restart() {
        this.tracks = this.createTracks();
        this.car = new Car(this);
        this.running = false;
        this.play();
    }

    play() {
        this.running = true;
        this.animate();
    }

    createTracks(){
        const startingTracks = []
        let firstTrack = new Track(this)
        startingTracks.push(firstTrack)
        return startingTracks
    }

    animateTracks(){
        for (let i = 0; i < this.tracks.length; i++){
            this.tracks[i].animate()
        }
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

