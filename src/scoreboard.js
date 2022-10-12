
export default class Scoreboard {
    constructor(game){
        this.game = game
        this.score = 0
    }

    keepScore(){
        this.score = Math.round(this.game.car.positionX - this.game.dimensions.width / 4)/100
        return this.score
    }


}