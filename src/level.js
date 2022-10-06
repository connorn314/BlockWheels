import Track from "./track";

export default class Level {
    constructor(dimensions){
        this.dimensions = dimensions;
        this.track = new Track(this.dimensions)
    }

    drawBackground(ctx) {
        ctx.fillStyle = "skyblue";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate(ctx){
        this.drawBackground(ctx);
        this.track.animate(ctx)
        this.moveTrack(this.track)
    }

    moveTrack(track){
        track.positionx -= 1 // make dynamic later
    }


}

