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
        
        this.MAP_WIDTH = 11000;
        this.MAP_HEIGHT = 5000;
        
        this.keyState = {
            spaceDown: false,
            spaceRelease: false,
            leftDown: false,
            rightDown: false,
            forward: false
        }
        
        this.gameIsOver = false
        this.gameOverElement = document.getElementById("game-over")
        this.pauseButton = document.getElementById("pause")
        this.finalScore = document.getElementById("final-score")
        this.score = document.getElementById("score-div")
        document.addEventListener('keydown', this.keyDown.bind(this));
        document.addEventListener('keyup', this.keyUp.bind(this));
    }

    drawBackground(ctx) {
        ctx.fillStyle = "#0580ff";
        ctx.fillRect(0, 0, this.MAP_WIDTH, this.MAP_HEIGHT);
    }

    animate() {
        this.drawBackground(this.ctx);
        this.setCamera();
        this.animateTracks();
        this.car.animate();
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
        this.gameIsOver = false;
        while (this.tracks.length > 13){
            this.tracks.pop()
        }
        this.car.positionX = this.dimensions.width / 4
        this.car.positionY = this.dimensions.height / 4
        this.car.accelerationX = 0
        this.car.velocityX = 0
        this.car.velocityY = 0
        this.car.vector = 0
        this.scoreboard.accumulatedScore = 0
    }

    pause(){
        this.running = false
    }

    unpause(){
        if (this.running === false){
            this.play()
        }
    }

    gameOver(){
        this.finalScore.innerText = `Final Score: ${this.scoreboard.keepScore()}`;
        this.gameIsOver = true
        this.score.style.display = "none"
        this.pauseButton.style.display = "none"
        this.gameOverElement.style.display = "flex"
        this.gameOverElement.style.position = "absolute";
        this.gameOverElement.style.flexDirection = "column";
        this.gameOverElement.style.alignItems = "center";
        this.gameOverElement.style.left = "35%";
        this.gameOverElement.style.top = "24%";
        this.gameOverElement.style.width = "30%";
        this.gameOverElement.style.backgroundColor = "#f01924";
        this.gameOverElement.style.border = "10px";
        this.gameOverElement.style.borderRadius = "10%";
        this.gameOverElement.style.borderColor = "#f72934"
        this.gameOverElement.style.borderStyle = "outset";

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
        let firstTrack = new Track(this, 1500, 0)
        firstTrack.firstTrack()
        startingTracks.push(firstTrack)
        for (let i = 0; i < 10; i++){
            let nextTrack = new Track(this)
            if (i === 0){
                nextTrack.positionX = firstTrack.positionX + firstTrack.dX
                nextTrack.positionY = firstTrack.positionY + 50
                startingTracks.push(nextTrack)
            } else {
                nextTrack.positionX = startingTracks[i].positionX + startingTracks[i].dX + Track.getRandomInt(0, 200)
                nextTrack.positionY = startingTracks[i].positionY + startingTracks[i].dY 
                startingTracks.push(nextTrack)
            }
        }
        let lastTrack = new Track(this, 1500, 0)
        let finalIndex = startingTracks.length - 1
        lastTrack.positionX = startingTracks[finalIndex].positionX + startingTracks[finalIndex].dX + Track.getRandomInt(0, 200)
        lastTrack.positionY = startingTracks[finalIndex].positionY + startingTracks[finalIndex].dY 
        startingTracks.push(lastTrack)
        return startingTracks
    }

    regulateTracks(){
        if (this.car.positionX - this.tracks[this.tracks.length - 1].positionX > 450){
            this.scoreboard.accumulatedScore += this.scoreboard.currentScore
            this.car.positionX = this.dimensions.width / 5 + 450
            this.car.positionY = 354 
            while (this.tracks.length > 1){
                this.tracks.pop()
            }
            for (let i = 0; i < 10; i++){
                let nextTrack = new Track(this)
                if (i === 0){
                    nextTrack.positionX = this.tracks[i].positionX + this.tracks[i].dX
                    nextTrack.positionY = this.tracks[i].positionY + 50
                    this.tracks.push(nextTrack)
                } else {
                    nextTrack.positionX = this.tracks[i].positionX + this.tracks[i].dX + Track.getRandomInt(0, 200)
                    nextTrack.positionY = this.tracks[i].positionY + this.tracks[i].dY 
                    this.tracks.push(nextTrack)
                }
            }
            let lastTrack = new Track(this, 1500, 0)
            let finalIndex = this.tracks.length - 1
            lastTrack.positionX = this.tracks[finalIndex].positionX + this.tracks[finalIndex].dX + Track.getRandomInt(0, 200)
            lastTrack.positionY = this.tracks[finalIndex].positionY + this.tracks[finalIndex].dY 
            this.tracks.push(lastTrack)
        }
    }

    animateTracks(){
        for (let i = 0; i < this.tracks.length; i++){
            this.tracks[i].animate()
            this.regulateTracks()
        }
    }
    
    keyDown(e){ // dry up this code
        if (this.gameIsOver === false){
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

