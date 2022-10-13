
export default class Scoreboard {
    constructor(game){
        this.game = game
        this.accumulatedScore = 0
        this.totalScore = 0
        this.currentScore = 0
    }

    keepScore(){
        this.currentScore = this.game.car.positionX - this.game.dimensions.width / 4
        this.totalScore = this.currentScore + this.accumulatedScore
        return Math.round(this.totalScore) / 100
    }

}