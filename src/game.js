import Car from "./car";
import Track from "./track";

export default class BotWheels {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {
            width: canvas.width, 
            height: canvas.height
        };

        this.keyState = {
            spaceDown: false,
            spaceRelease: false,
            leftDown: false,
            rightDown: false,
        }
        
        document.addEventListener('keydown', this.keyDown.bind(this));
        document.addEventListener('keyup', this.keyUp.bind(this));
        

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
        firstTrack.firstTrack()
        startingTracks.push(firstTrack)
        return startingTracks
    }

    regulateTracks(){
        if (this.tracks[this.tracks.length - 1].hitBox.topRight[0] < this.dimensions.width){
            let nextTrack = new Track(this)
            this.tracks.push(nextTrack)
        } 
        if (this.tracks[0].hitBox.topRight[0] < 0){
            this.tracks.shift()
            console.log('delete')
        }
    }

    animateTracks(){
        for (let i = 0; i < this.tracks.length; i++){
            this.tracks[i].animate()
            this.regulateTracks()
        }
    }
    keyDown(e){
        if (e.code === "Space" && this.running === true){
            this.keyState.spaceDown = true;
            this.car.preJump();
        } else if (e.code === "ArrowLeft" && this.running === true){
            this.keyState.leftDown = true;
        }  else if (e.code === "ArrowRight" && this.running === true){
            this.keyState.rightDown = true;
        }
    }

    keyUp(e){
        if (e.code === "Space" && this.running === true){
            this.keyState.spaceRelease = true;
            this.car.jump();
        } else if (e.code === "ArrowLeft" && this.running === true){
            this.keyState.leftDown = false;
        } else if (e.code === "ArrowRight" && this.running === true){
            this.keyState.rightDown = false;
        }
        
    }

}

