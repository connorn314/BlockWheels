import Car from "./car";
import Scoreboard from "./scoreboard";
import Track from "./track";




export default class BotWheels {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {
            width: canvas.width, 
            height: canvas.height
        };
        
        this.MAP_WIDTH = 8000;
        this.MAP_HEIGHT = 4000;
        
        this.keyState = {
            spaceDown: false,
            spaceRelease: false,
            leftDown: false,
            rightDown: false,
            forward: false
        }
        
        
        this.score = document.getElementById("score")
        document.addEventListener('keydown', this.keyDown.bind(this));
        document.addEventListener('keyup', this.keyUp.bind(this));
        canvas.addEventListener('click', this.restartButton.bind(this))
        

    }

    //colors: blue (#006fdb), red(#f01924), yellow(#fef102)
    drawBackground(ctx) {
        ctx.fillStyle = "#0580ff";
        ctx.fillRect(0, 0, this.MAP_WIDTH, this.MAP_HEIGHT);
    }

    animate() {
        this.drawBackground(this.ctx);
        this.setCamera();
        // this.drawRestart(this.ctx);
        this.animateTracks();
        this.car.animate();
        // console.log(score)
        score.innerText = this.scoreboard.keepScore();
        if (this.running === true){
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    restart() {
        this.tracks = this.createTracks();
        this.car = new Car(this);
        this.scoreboard = new Scoreboard(this);
        this.running = false;
        this.play();
    }

    restartButton() {
        while (this.tracks.length > 11){
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
        if (this.car.positionY <= (this.dimensions.height / 3)){
            this.cameraY = 0
        } else {
            this.cameraY = -((this.dimensions.height / 3) - this.car.positionY);
        }
    }

    createTracks(){
        const startingTracks = []
        let firstTrack = new Track(this)
        firstTrack.firstTrack()
        startingTracks.push(firstTrack)
        for (let i = 0; i < 10; i++){
            let nextTrack = new Track(this)
            if (i === 0){
                nextTrack.positionX = firstTrack.positionX + firstTrack.dX
                nextTrack.positionY = firstTrack.positionY + firstTrack.dY / 2
                startingTracks.push(nextTrack)
            } else {
                nextTrack.positionX = startingTracks[i].positionX + startingTracks[i].dX + Track.getRandomInt(0, 200)
                nextTrack.positionY = startingTracks[i].positionY + startingTracks[i].dY 
                startingTracks.push(nextTrack)
            }
        }
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

