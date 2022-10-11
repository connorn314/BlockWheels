import Car from "./car";
import Track from "./track";

export default class BotWheels {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {
            width: canvas.width, 
            height: canvas.height
        };

        this.MAP_WIDTH = 4000;
        this.MAP_HEIGHT = 2000;

        this.keyState = {
            spaceDown: false,
            spaceRelease: false,
            leftDown: false,
            rightDown: false,
            forward: false
        }
        
        document.addEventListener('keydown', this.keyDown.bind(this));
        document.addEventListener('keyup', this.keyUp.bind(this));
        canvas.addEventListener('click', this.restartButton.bind(this))
        

    }

    drawBackground(ctx) {
        ctx.fillStyle = "skyblue";
        ctx.fillRect(0, 0, this.MAP_WIDTH, this.MAP_HEIGHT);
    }

    // drawRestart(ctx) {
    //     ctx.fillStyle = "orangered";
    //     ctx.fillRect((this.dimensions.width / 12) * 11, (this.dimensions.height / 8) * 7, 60, 60)
    //     ctx.font = '36px serif';
    //     ctx.fillStyle = "white";
    //     ctx.fillText("R", (this.dimensions.width / 16) * 15, (this.dimensions.height / 18) * 17)
    // }

    animate() {
        this.drawBackground(this.ctx);
        this.setCamera();
        // this.drawRestart(this.ctx);
        this.animateTracks();
        this.car.animate();
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

    restartButton() {
        while (this.tracks.length > 2){
            this.tracks.pop()
        }
        // this.tracks[0].firstTrack()
        this.car.positionX = this.dimensions.width / 4
        this.car.positionY = this.dimensions.height / 4
        this.car.vector = 0
        // this.grounded = false
    }

    play() {
        this.running = true;
        
        this.animate();
    }

    setCamera(){
        this.cameraX = -((this.dimensions.width / 4) - this.car.positionX);
        if (this.car.positionY <= (this.dimensions.height / 2)){
            console.log("true")
            this.cameraY = 0
        } else {
            this.cameraY = -((this.dimensions.height / 2) - this.car.positionY);
        }
        console.log(this.cameraY)
        console.log(this.car.positionY)
    }

    createTracks(){
        const startingTracks = []
        let firstTrack = new Track(this)
        let secondTrack = new Track(this)
        firstTrack.firstTrack()
        secondTrack.positionX = firstTrack.positionX + firstTrack.dX
        secondTrack.positionY = firstTrack.positionY + firstTrack.dY / 2
        startingTracks.push(firstTrack)
        startingTracks.push(secondTrack)
        
        return startingTracks
    }

    regulateTracks(){
        // if (this.tracks[this.tracks.length - 1].hitBox.topRight[0] < this.dimensions.width){
        //     let nextTrack = new Track(this)
        //     this.tracks.push(nextTrack)
        // } 
        // if (this.tracks[0].hitBox.topRight[0] < 0){
        //     this.tracks.shift()
        // }
    }

    animateTracks(){
        for (let i = 0; i < this.tracks.length; i++){
            this.tracks[i].animate()
            this.regulateTracks()
        }
    }
    
    keyDown(e){ // dry up this code
        if (e.code === "Space" && this.running === true){
            this.keyState.spaceDown = true;
        } else if (e.code === "ArrowLeft" && this.running === true){
            this.keyState.leftDown = true;
        }  else if (e.code === "ArrowRight" && this.running === true){
            this.keyState.rightDown = true;
        } else if (e.code === "ArrowUp" && this.running ===  true){
            this.keyState.forward = true;
        }
    }

    keyUp(e){ // dry up this code
        if (e.code === "Space" && this.running === true){
            this.keyState.spaceRelease = true;
            this.keyState.spaceDown = false;
        } else if (e.code === "ArrowLeft" && this.running === true){
            this.keyState.leftDown = false;
        } else if (e.code === "ArrowRight" && this.running === true){
            this.keyState.rightDown = false;
        } else if (e.code === "ArrowUp" && this.running ===  true){
            this.keyState.forward = false;
        }
        
    }

}

